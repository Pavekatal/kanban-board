import Loader from "./Loader";
import {
  SLoaderCard,
  SLoaderContainer,
  SLoaderContent,
  SLoaderHeader,
} from "./SLoaderCard.styled";

const LoaderCard = () => {
  return (
    <SLoaderCard>
      <SLoaderContainer>
        <SLoaderHeader>
          <Loader width={82} height={20} borderRadius={18} />
          <Loader width={18} height={4} />
        </SLoaderHeader>
        <SLoaderContent>
          <Loader width={113} height={13} />
          <Loader width={58} height={13} />
        </SLoaderContent>
      </SLoaderContainer>
    </SLoaderCard>
  );
};

export default LoaderCard;
