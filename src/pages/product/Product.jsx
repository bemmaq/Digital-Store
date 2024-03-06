import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import './product.scss'
import { useDispatch, useSelector } from 'react-redux';
import { getSport } from '../../store/shopSlice';
import { Link } from 'react-router-dom';

const Product = () => {
  const { sportData, isLoading, error } = useSelector((state) => state.sport);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSport());
  }, []);

  const { t } = useTranslation();
  return (
    <div className='container'>
     <div className='product_1'>
     <div className='product_block'>
        <h6>{t('Resultados para “Tênis”-389 produtos')}</h6>
        <div className='category'>
           <h4>Filtrar por</h4>
           <hr />
           <h4>{t('Marka')}</h4>
           <label>
           <input type="checkbox" />
            {t(' Adiddas')}
           </label>
           <label>
           <input type="checkbox" />
            {t('Calenciaga')}
           </label>
           <label>
           <input type="checkbox" />
           {t('K-Swiss')}
           </label>
           <label>
           <input type="checkbox" />
           {t('Nike')}
           </label>
           <label>
            <input type="checkbox" />
            {t('Puma')}
           </label>
        
            <h4>Categoria</h4>
            <label>
              <input type="checkbox" />
              {t('Esporte e lazer')}
            </label>
             <label>
              <input type="checkbox" />
              {t('Casual')}
            </label>
             <label>
              <input type="checkbox" />
              {t('Utilitário')}
            </label>
             <label>
              <input type="checkbox" />
              {t('Corrida')}
            </label>
            <h4>Gênero</h4>
            <label>
              <input type="checkbox" />
              {t('Masculino')}
            </label> 
            <label>
              <input type="checkbox" />
              {t('Feminino')}
            </label>
            <label>
              <input type="checkbox" />
              {t('Unisex')} 
            </label>
            <h4>Estado</h4>
            <label>
              <input type="checkbox" />
              {t('Novo')}
            </label>
            <label>
              <input type="checkbox" />
              {t('Usado')}
            </label>
           </div>
           
        
      </div>


      <div className='product_sport'>
  
     
     {sportData.slice(56, 71).map((el) => (
              <h2 key={el.id}>
              
              <Link to={`/productLogo/${el.id}`}>
              <img className="product_main" width={250} src={el.images} alt="" />
              </Link>
                <div className="price">
                  <p>{el.name}</p>
                  <span>{el.price}</span>
                  <s>200$</s>
                </div>
            
              
              </h2>
            ))}
   
      </div>
     </div>
    </div>
  )
}

export default Product

   {/* 555661613 */}