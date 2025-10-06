import { ImgHTMLAttributes, useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface LazyImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  placeholderSrc?: string;
  threshold?: number;
  className?: string;
}

/**
 * Lazy loading image component with blur-up effect
 * Improves performance by deferring image loading until visible
 */
export function LazyImage({
  src,
  alt,
  placeholderSrc,
  threshold = 0.01,
  className,
  ...props
}: LazyImageProps) {
  const [imageSrc, setImageSrc] = useState<string | undefined>(placeholderSrc);
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!imgRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setImageSrc(src);
            observer.disconnect();
          }
        });
      },
      { threshold }
    );

    observer.observe(imgRef.current);

    return () => {
      observer.disconnect();
    };
  }, [src, threshold]);

  return (
    <img
      ref={imgRef}
      src={imageSrc}
      alt={alt}
      className={cn(
        "transition-opacity duration-300",
        isLoaded ? "opacity-100" : "opacity-0",
        className
      )}
      onLoad={() => setIsLoaded(true)}
      loading="lazy"
      {...props}
    />
  );
}
