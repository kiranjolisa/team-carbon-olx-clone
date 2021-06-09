import React from "react";

import { BorderBox, Categories, CategoriesList, CategoryItems, ItemName, PostAttributeLink, SubHeader } from "./RenderCategoriesStyles";
import { ReactComponent as OlxAuto } from '../../Assets/olxAuto.svg'
import { ReactComponent as PropertiesIcon } from '../../Assets/propertiesIcon.svg'
import { ReactComponent as MobilesIcon } from '../../Assets/mobilesIcon.svg'
import { ReactComponent as JobsIcon } from '../../Assets/jobsIcon.svg'
import { ReactComponent as BikesIcon} from '../../Assets/bikesIcon.svg'
import { ReactComponent as ElectronicsIcon } from '../../Assets/electronicsIcon.svg'
import { ReactComponent as CommercialVehicle} from '../../Assets/commercialVehicle.svg'
import { ReactComponent as FurnitureIcon } from '../../Assets/furnitureIcon.svg'
import { ReactComponent as FashionIcon } from '../../Assets/fashionIcon.svg'
import { ReactComponent as BooksIcon } from '../../Assets/booksIcon.svg'
import { ReactComponent as PetsIcon } from '../../Assets/petsIcon.svg'
import { ReactComponent as ServicesIcon } from '../../Assets/servicesIcon.svg'
import { ReactComponent as RightArrow } from '../../Assets/rightArrowPost.svg'

export const RenderCategories = () => {
    return (
        <BorderBox>
            <SubHeader>CHOOSE A CATEGORY</SubHeader>
            <CategoriesList>
                {Categories.map((item, i) => <CategoryItems>
                   {
                   i === 0? <OlxAuto />:
                   i === 1 ? <PropertiesIcon />:
                   i === 2 ? <MobilesIcon />:
                   i === 3 ? <JobsIcon/>:
                   i === 4 ?<BikesIcon/> :
                   i === 5 ?<ElectronicsIcon/> :
                   i === 6? <CommercialVehicle/>:
                   i === 7 ?<FurnitureIcon/> :
                   i=== 8 ?<FashionIcon/> : 
                   i === 9 ? <BooksIcon/>:
                   i === 10 ? <PetsIcon />:
                   i === 11 ? <ServicesIcon/>:
                   null
                    }
                    <ItemName>{item.title}</ItemName>
                    <RightArrow />
                </CategoryItems>)}
            </CategoriesList>
            <CategoriesList>
                {Categories.map((item) => item.subCategories.map(item => <CategoryItems>
                    <PostAttributeLink to = '/post/attributes'>{item}</PostAttributeLink></CategoryItems>))}
            </CategoriesList>
        </BorderBox>
    );
}