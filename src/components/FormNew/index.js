import React from 'react'
import { useForm } from 'react-hook-form'

import Button from '../Button'
import Field from '../Field'
import Form from '../Form'


const FormNew = () => {
  const { register, handleSubmit } = useForm()
  const onSubmit = (value) => {
    //value
    const inteiro = value.inteiro

    //fibonacci list
    let fibonacciList = []
    let num = 0
    let proxNum = 1
    let aux
    while (num <= inteiro) {
      fibonacciList.push(num)
      aux = proxNum;
      proxNum = proxNum + num
      num = aux
    }
    
    //soma fibonacci
    const fibonacciListReverse = fibonacciList.reverse()
    let soma = 0
    let soma1 = 0
    for (let i = 0; i < fibonacciListReverse.length; i++) {
      if (fibonacciListReverse[i] + soma <= inteiro) {
        soma += fibonacciList[i]
        soma1 += 1
        if (fibonacciListReverse[i] === 0) {
          soma1 -= 1
        }
      }
    }
    
    //append list
    let li = document.createElement('li')
    let textList = document.createTextNode(soma1)
    li.append(textList)
    document.getElementById('list').prepend(li)
    

    //destaque do firstchild 
    var filhos = document.getElementById('list').children
    if(filhos[1] != null){
      filhos[1].style.fontSize = "15px";
      filhos[1].style.fontStyle = "italic"
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Field.Text label="Numero Inteiro" name="inteiro" type="text" register={register} />
      <Button>Calcular</Button>
    </Form>
  )
}

export default FormNew