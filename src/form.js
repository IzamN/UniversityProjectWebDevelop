import {useForm} from 'react-hook-form'
import React, { useState, useRef } from 'react'
import {serverPath} from './helpers/path'
import { useDispatch, useSelector } from 'react-redux';
const Form = ({typeRate}) => {
  const dispatch=useDispatch()
  const isFetching=useSelector((state)=>state.isFetching)
  const disableBtn=(value)=>{dispatch({type:'ISFETCHING', payload:value})}
  const {register, handleSubmit, formState:{errors}, reset}=useForm();
  const onsubmit=(data, event)=>{
    disableBtn(true);
    event?.preventDefault()
    const requist={
        name:data.name,
        mobile: data.mobile,
        email: data.email,
        comment: data.comment? data.comment:'',
        tariff: data.tariff
    };

  fetch(serverPath+ 'req',{
    method: "POST",
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(requist)
  }).then((rez)=>{
    if (rez.ok) {
    alert('Заявка успешно отправлена!');
    disableBtn(false);
    reset(()=>({name:"", mobile:"", checkbox:"",mail:"", comment:"", tariff:'standart'}));
    }}).catch(err=>alert(err.message))
  }

  return ( 
    <form onSubmit={handleSubmit(onsubmit)} className='form'>
      <input type='text' className='field-form' placeholder='Ваше имя' 
       {...register('name', {required:'Поле обязательно для заполнения'})}  
      aria-invalid={errors.name ? "true" : "false"} 
      ></input>
      <div className='helperText'>{errors.name?.message}</div> 
      
      <input type="tel" className='field-form' placeholder="Телефон" {...register("mobile", {required: 'Поле обязательно для заполнения', minLength:{value:11, message:'минимальное количество символов 11'}, maxLength: {value:12, message:'максимальное количество символов 12'}})}aria-invalid={errors.mobile ? "true" : "false"} />
      <div className='helperText'>{errors.mobile?.message}</div>

      <input  className='field-form' type="email" placeholder="E-mail" {...register("mail", {required: 'Поле обязательно для заполнения', pattern:{value:/^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i, message:'введеные данные должны содержать @ и только английские символы'}})}
       aria-invalid={errors.mail ? "true" : "false"}
   />
 <div className='helperText'>{errors.mail?.message}</div> 
      <textarea className='field-form form-comment' cols="30" rows="10" placeholder='Ваш комментарий' 
       {...register('comment')} aria-invalid="false"></textarea>
      
    <select className='tariff-form' name="tariff" id="" {...register('tariff')} aria-invalid="false" >
      <option  value="standart" >Стандратный</option>
      <option  value="bisness" >Бизнес</option>
      <option  value="vip" >VIP</option>
    </select>
    <label htmlFor="checkbox-form" className='text__checkbox-form'>
    <input className='checkbox-form' id='checkbox-form' type='checkbox'  {...register('checkbox', {required:'Поле обязательно для заполнения'})}  
      aria-invalid={errors.checkbox ? "true" : "false"}></input>Отправляя заявку, я даю согласие на обработку своих персональных данных</label>
    <div className='helperText'>{errors.checkbox?.message}</div> 
    <button  disabled={isFetching} className='btn-form' type='submit'>Отправить заявку</button>
    </form>
   );
}
 
export default Form;