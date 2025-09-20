import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import NotFound from '@/pages/NotFound';
import { getServiceContent } from '@/data/service-content';

const ServiceDetailPage = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  
  if (!serviceId) {
    return <NotFound />;
  }

  const serviceContent = getServiceContent(serviceId);
  
  if (!serviceContent) {
    return <NotFound />;
  }

  const ServiceComponent = serviceContent.component;

  return (
    <>
      <Helmet>
        <title>{serviceContent.seo.title}</title>
        <meta name="description" content={serviceContent.seo.description} />
        <meta name="keywords" content={serviceContent.seo.keywords} />
        <link rel="canonical" href={`https://amoai.agency/services/${serviceId}`} />
        
        {/* Open Graph */}
        <meta property="og:title" content={serviceContent.seo.title} />
        <meta property="og:description" content={serviceContent.seo.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://amoai.agency/services/${serviceId}`} />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(serviceContent.seo.structuredData)}
        </script>
      </Helmet>

      <ServiceComponent />
    </>
  );
};

export default ServiceDetailPage;