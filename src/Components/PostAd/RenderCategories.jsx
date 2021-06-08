import { BorderBox, SubHeader } from "./RenderCategoriesStyles";
import olxAuto from '../../Assets/olxAuto.svg'
export const RenderCategories = () => {
    return (
        <BorderBox>
            <SubHeader>CHOOSE A CATEGORY</SubHeader>
            <img src = {olxAuto} alt = "trial"/>
        </BorderBox>
    );
}