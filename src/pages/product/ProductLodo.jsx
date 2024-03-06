import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './productLogo.scss'
import axios from 'axios'
import star from '../../assets/svg/Star 01.svg'
import star1 from '../../assets/svg/Star 02.svg'
import star0 from '../../assets/svg/Star 1.svg'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { getSport } from '../../store/shopSlice'
import { setItenCard } from '../../store/card/reducer'

const ProductLodo = () => {
  
  const {t}=useTranslation()
  const { sportData, isLoading, error } = useSelector((state) => state.sport);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSport());
  }, []);
  const params= useParams()
  const [product, setProduct]=useState(null)



  const getProduct=async()=>{
    try{
      const {data} =await axios.get(`https://656df576bcc5618d3c244f13.mockapi.io/ap/v1/Shop/${params.id}`)
      setProduct(data)

    }catch(error){
      console.log(error);
    }
  
 
  }
  useEffect(()=>{
      getProduct()
  },[params.id])
  if(product==null){
    return <h3>Loading</h3>
  }
   
  const handleClick=(product)=>{
   
    dispatch(setItenCard(product))
  }
  return (
    <div className='container'>
       {product ? (
        <div className="detail">
          <img width={500} src={product.images} alt="" />
          <div className="detail-cont">
            <h3 className="raz">
             Tênis Nike Revolution 
           <br />6 Next Nature Masculino
            </h3>
            <p className='carual'>Casual | Nike | REF:38416711</p>
            <div className='stars'>
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star1} alt="" />
              <button className='star_btn'>4.7
                <img src={star0} alt="" />
              </button>
            </div>
            <div className='text_lorem'>
            <h6>Descrição do produto</h6>
            <p >{t('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.')}</p>
            </div>
            <p className="prais-3">{product.price}</p>
            <p className="col">{t('Tamanho')}</p>
            <div className="razmer">
              <p>32</p>
              <p>40</p>
              <p>41</p>
              <p>42</p>
              <p>43</p>
            </div>
            <p className="col">{t('Tamanho')}</p>
            <div className="colorig">
              <div className="color-1">
                <p></p>
              </div>
              <div className="color-2">
                <p></p>
              </div>
              <div className="color-3">
                <p></p>
              </div>
              <div className="color-4">
                <p></p>
              </div>
            </div>
            <div className="btn-detail">
              <button onClick={()=> handleClick(product)}>COMPRAR</button>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
      <div>
          <h5>{t('Produtos Relacionados')}</h5>
        <div className='block_map'>
        {sportData.slice(0,4).map((el) => (
              <h2 key={el.id}>
                <img className="img_main" width={250} src={el.images} alt="" />
                <div className="price">
                  <p>{el.name}</p>
                  <span>{el.price}                                                                                     
                  </span>
                </div>
              </h2>
            ))}
        </div>
      </div>
    </div>
  
  )
}

export default ProductLodo