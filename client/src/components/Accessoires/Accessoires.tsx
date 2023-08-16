import React from 'react'
import css from "./Accessoires.module.scss";
import access1 from "../../assets/images/Accessoires/access1.png";
import access2 from "../../assets/images/Accessoires/access2.png";
import access3 from "../../assets/images/Accessoires/access3.png";
import access4 from "../../assets/images/Accessoires/access4.png";
import access5 from "../../assets/images/Accessoires/access5.png";
import access6 from "../../assets/images/Accessoires/access6.png";
import access7 from "../../assets/images/Accessoires/access7.png";
import access8 from "../../assets/images/Accessoires/access8.png";
import access9 from "../../assets/images/Accessoires/access9.png";
import access10 from "../../assets/images/Accessoires/access10.png";
import access11 from "../../assets/images/Accessoires/access11.png";
import access12 from "../../assets/images/Accessoires/access12.png";
import access13 from "../../assets/images/Accessoires/access13.png";
import access14 from "../../assets/images/Accessoires/access14.png";
import access15 from "../../assets/images/Accessoires/access15.png";
import access16 from "../../assets/images/Accessoires/access16.png";
import { useTranslation } from "react-i18next";
import Catalog from '../Catalog/Catalog';
import MultipleSelectCheckmarks from '../Catalog/Filter/Select';
import SelectStyle from '../Catalog/Filter/SelectStyle';



function Accessoires() {
  const { t } = useTranslation("Accessoires");

  return (
    <div>
            <Catalog/>
    <section className={css.accessoires__container}>
      <div className={css.accessoires__uptitle}>

        <div className={css.accessoires__uptitlecard1}>
          <MultipleSelectCheckmarks/>
        </div>
     

        <div className={css.accessoires__uptitlecard2}>
          <SelectStyle/>
        </div>
      </div>


<div className={css.accessoires__cardsrow}>

<div className={css.accessoires__cards}>

<div className={css.accessoires__card}>
   <img  className="image" src={access1} alt="image"/>
   <div className={css.accessoires__cardname}>
       <p>{t("mirrorA")}</p>
       <p className={css.accessoires__cardprice}>16 200 $</p>
   </div> 
</div>


<div className={css.accessoires__card}>
   <img  className="image" src={access2} alt="image"/>
   <div className={css.accessoires__cardname}>
      <p>{t("mirrorS")}</p>
       <p className={css.accessoires__cardprice}>22 000 $</p>
   </div>
 
</div>


<div className={css.accessoires__card}>
   <img  className="image" src={access3} alt="image"/>
   <div className={css.accessoires__cardname}>
       <p>{t("mirrorAd")}</p>
       <p className={css.accessoires__cardprice}>47 000 $</p>
   </div>
</div>



<div className={css.accessoires__card}>
   <img  className="image" src={access4} alt="image"/>
   <div className={css.accessoires__cardname}>
       <p>{t("vaseF")}</p>
       <p className={css.accessoires__cardprice}>7 090 $</p>
   </div>
</div>




</div>



<div className={css.accessoires__cards}>

<div className={css.accessoires__card}>
   <img  className="image" src={access5} alt="image"/>
   <div className={css.accessoires__cardname}>
       <p>{t("vaseE")}</p>
       <p className={css.accessoires__cardprice}>13 000 $</p>
   </div> 
</div>


<div className={css.accessoires__card}>
   <img  className="image" src={access6} alt="image"/>
   <div className={css.accessoires__cardname}>
       <p>{t("vaseFI")}</p>
       <p className={css.accessoires__cardprice}>260 $</p>
   </div>
 
</div>


<div className={css.accessoires__card}>
   <img  className="image" src={access7} alt="image"/>
   <div className={css.accessoires__cardname}>
       <p>{t("vaseCER")}</p>
       <p className={css.accessoires__cardprice}>380 $</p>
   </div>
</div>



<div className={css.accessoires__card}>
   <img  className="image" src={access8} alt="image"/>
   <div className={css.accessoires__cardname}>
       <p>{t("flowerpot")}</p>
       <p className={css.accessoires__cardprice}>240 $</p>
   </div>
</div>

</div>


<div className={css.accessoires__cards}>

<div className={css.accessoires__card}>
   <img  className="image" src={access9} alt="image"/>
   <div className={css.accessoires__cardname}>
      <p>{t("clockT")}</p>
       <p className={css.accessoires__cardprice}>560 $</p>
   </div> 
</div>


<div className={css.accessoires__card}>
   <img  className="image" src={access10} alt="image"/>
   <div className={css.accessoires__cardname}>
   <p>{t("clockS")}</p>
       <p className={css.accessoires__cardprice}>2 350 $</p>
   </div>
 
</div>


<div className={css.accessoires__card}>
   <img  className="image" src={access11} alt="image"/>
   <div className={css.accessoires__cardname}>
   <p>{t("mirrorAI")}</p>
       <p className={css.accessoires__cardprice}>220 $</p>
   </div>
</div>



<div className={css.accessoires__card}>
   <img  className="image" src={access12} alt="image"/>
   <div className={css.accessoires__cardname}>
   <p>{t("mirrorFI")}</p>
       <p className={css.accessoires__cardprice}>2630 $</p>
   </div>
</div>




</div>



<div className={css.accessoires__cards}>

<div className={css.accessoires__card}>
   <img  className="image" src={access13} alt="image"/>
   <div className={css.accessoires__cardname}>
   <p>{t("clockMELT")}</p>
       <p className={css.accessoires__cardprice}>380 $</p>
   </div> 
</div>


<div className={css.accessoires__card}>
   <img  className="image" src={access14} alt="image"/>
   <div className={css.accessoires__cardname}>
   <p>{t("mirrorZA")}</p>
       <p className={css.accessoires__cardprice}>2550 $</p>
   </div>
 
</div>


<div className={css.accessoires__card}>
   <img  className="image" src={access15} alt="image"/>
   <div className={css.accessoires__cardname}>
   <p>{t("posterB")}</p>
       <p className={css.accessoires__cardprice}>4520 $</p>
   </div>
</div>



<div className={css.accessoires__card}>
   <img  className="image" src={access16} alt="image"/>
   <div className={css.accessoires__cardname}>
   <p>{t("posterP")}</p>
       <p className={css.accessoires__cardprice}>2630 $</p>
   </div>
</div>

</div>

</div>
  
   </section>

    </div>
  )
}

export default Accessoires
