#!/usr/bin/env node

// Simple MCP Server for CopilotKit
// Based on the MCP protocol specification

import { createReadStream, createWriteStream } from 'fs';
import { spawn } from 'child_process';

// MCP Server implementation
class MCPServer {
  constructor() {
    this.tools = [
      {
        name: "echo",
        description: "Echo back a message",
        inputSchema: {
          type: "object",
          properties: {
            message: { type: "string", description: "Message to echo back" }
          },
          required: ["message"]
        }
      },
      {
        name: "ping",
        description: "Returns pong to confirm server is alive",
        inputSchema: {
          type: "object",
          properties: {}
        }
      },
      {
        name: "collect_brief",
        description: "Start the AMO AI project brief collection process",
        inputSchema: {
          type: "object",
          properties: {
            businessName: { type: "string", description: "Business name" },
            industry: { type: "string", description: "Industry" }
          },
          required: ["businessName", "industry"]
        }
      },
      {
        name: "query_database",
        description: "Query the AMO AI Supabase database",
        inputSchema: {
          type: "object",
          properties: {
            query: { type: "string", description: "SQL query to execute" },
            table: { type: "string", description: "Table name" }
          },
          required: ["table"]
        }
      }
    ];
  }

  async handleRequest(request) {
    try {
      const { method, params, id } = request;

      switch (method) {
        case "initialize":
          return {
            jsonrpc: "2.0",
            id,
            result: {
              protocolVersion: "2024-11-05",
              capabilities: {
                tools: {}
              },
              serverInfo: {
                name: "copilotkit-mcp-client",
                version: "1.0.0"
              }
            }
          };

        case "tools/list":
          return {
            jsonrpc: "2.0",
            id,
            result: {
              tools: this.tools
            }
          };

        case "tools/call":
          const { name, arguments: args } = params;
          let result;

          switch (name) {
            case "echo":
              result = {
                content: [{ type: "text", text: `echo: ${args.message}` }]
              };
              break;
            case "ping":
              result = {
                content: [{ type: "text", text: "pong" }]
              };
              break;
            case "collect_brief":
            result = { 
              content: [{ 
                type: "text", 
                text: `Starting brief collection for ${args.businessName} in ${args.industry} industry. Visit http://localhost:5001/brief to continue.` 
              }] 
            };
              break;
            case "query_database":
              result = {
                content: [{
                  type: "text",
                  text: `Querying ${args.table} table. Query: ${args.query || "SELECT * FROM " + args.table}`
                }]
              };
              break;
            default:
              throw new Error(`Unknown tool: ${name}`);
          }

          return {
            jsonrpc: "2.0",
            id,
            result
          };

        default:
          throw new Error(`Unknown method: ${method}`);
      }
    } catch (error) {
      return {
        jsonrpc: "2.0",
        id: request.id,
        error: {
          code: -32603,
          message: error.message
        }
      };
    }
  }

  async run() {
    const server = new MCPServer();
    
    // Handle stdin/stdout for MCP protocol
    process.stdin.setEncoding('utf8');
    process.stdout.setEncoding('utf8');

    let buffer = '';
    
    process.stdin.on('data', async (chunk) => {
      buffer += chunk;
      
      // Process complete JSON-RPC messages
      while (buffer.includes('\n')) {
        const lineEnd = buffer.indexOf('\n');
        const line = buffer.substring(0, lineEnd).trim();
        buffer = buffer.substring(lineEnd + 1);
        
        if (line) {
          try {
            const request = JSON.parse(line);
            const response = await server.handleRequest(request);
            
            // Ensure proper JSON-RPC response format
            const output = JSON.stringify(response) + '\n';
            process.stdout.write(output);
            
            // Flush stdout to ensure immediate response
            if (process.stdout.flush) {
              process.stdout.flush();
            }
          } catch (error) {
            console.error('Error processing request:', error);
            // Send error response
            const errorResponse = {
              jsonrpc: "2.0",
              id: null,
              error: {
                code: -32603,
                message: error.message
              }
            };
            process.stdout.write(JSON.stringify(errorResponse) + '\n');
          }
        }
      }
    });

    process.stdin.on('end', () => {
      process.exit(0);
    });

    process.stdin.on('error', (error) => {
      console.error('Stdin error:', error);
      process.exit(1);
    });

    process.stdout.on('error', (error) => {
      console.error('Stdout error:', error);
      process.exit(1);
    });

    // Handle process termination
    process.on('SIGINT', () => {
      process.exit(0);
    });

    process.on('SIGTERM', () => {
      process.exit(0);
    });

    // Handle uncaught exceptions
    process.on('uncaughtException', (error) => {
      console.error('Uncaught exception:', error);
      process.exit(1);
    });

    process.on('unhandledRejection', (reason, promise) => {
      console.error('Unhandled rejection at:', promise, 'reason:', reason);
      process.exit(1);
    });
  }
}

// Start the server
const server = new MCPServer();

// Add some startup logging (to stderr so it doesn't interfere with MCP protocol)
console.error('CopilotKit MCP Server starting...');
console.error('Available tools:', server.tools.map(t => t.name).join(', '));

server.run().catch((error) => {
  console.error('Server error:', error);
  process.exit(1);
});