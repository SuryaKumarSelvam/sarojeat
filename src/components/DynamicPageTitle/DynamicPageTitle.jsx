import { useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';

const DynamicPageTitle = () => {
      const location = useLocation();
      const { productName } = useParams();

      const appName = "SAROJ eats"
            useEffect(() => {
            
                if (location.pathname === '/') {
                document.title = `Home - ${appName}`;
                } else if (location.pathname === '/cart') {
                document.title = `Cart - ${appName}`;
                } else if (location.pathname.includes('/product/')) {
                   const pathParts = location.pathname.split('/');
                   const productName = decodeURIComponent(pathParts[3] || 'Product');
                        document.title = `${productName} - Product Details`;
 
                } else {
                document.title = appName;
                }
            }, [location, productName]); 

            return null;
            };
 

export default DynamicPageTitle