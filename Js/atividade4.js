const aluno='lana'
const nota1=[7,8,9,10]
const nota2 =[5,6,7,8]
const extra= true
let soma=0
const notas= notas.concat(nota2)

nota.forEach(nota=>((soma+=nota)))
const media= soma/ notas.length
 arr=Math.round(media)
if (extra=true){
    arr+1
}
if(arr > 7){
    final=`parabens ${aluno}sua media e de ${arr},voce está aprovado`
}else{
final=`${aluno}´ sua media é de ${arr} voce`
}

