import { LoadingContent } from "./LoadingContent.styled";
import { SLoadingText } from "./SLoadingText.styled";

const LoadingText = () => {
  return (
    <LoadingContent>
      <SLoadingText>Подождите, данные загружаются...</SLoadingText>
    </LoadingContent>
  );
};

export default LoadingText;
