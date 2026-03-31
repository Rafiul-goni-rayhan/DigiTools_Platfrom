import Banner from '../Components/Banner/Banner';
import StateSection from '../Components/StatSection/StateSection';
import Card from '../Components/CardSection/Card';
import PricingCard from '../Components/pricingCard/PricingCard';
import CallToAction from '../Components/Calltoaction/CallToAction';

const HomePage = ({ cartItems, setCartItems, selectProduct, setSelectProduct }) => {
  return (
    <>
      <Banner />
      <StateSection />
      
      <Card 
        cartItems={cartItems} 
        setCartItems={setCartItems} 
        selectProduct={selectProduct} 
        setSelectProduct={setSelectProduct} 
      />
      
      <PricingCard />
      <CallToAction />
    </>
  );
};

export default HomePage;