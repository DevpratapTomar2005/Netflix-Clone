
let on_Mail_input = () => {
    
    let input1 = document.getElementById("mail-input")
    let input2 = document.getElementById("mail-input2")
    input1.addEventListener('click',()=>{
        let label1 = document.querySelectorAll(".email")[0].firstElementChild;
        label1.style.fontSize="16px";
        label1.style.top="1px";
        input1.style.height="27px"
    })
   
    input2.addEventListener('click',()=>{
        let label2 = document.querySelectorAll(".email")[1].firstElementChild;
        label2.style.fontSize="16px";
        label2.style.top="1px";
        input2.style.height="27px"
    })
    
}
on_Mail_input();


let qbtn1=document.getElementById('qbtn1')
let qbtn2=document.getElementById('qbtn2')
let qbtn3=document.getElementById('qbtn3')
let qbtn4=document.getElementById('qbtn4')
let qbtn5=document.getElementById('qbtn5')
let qbtn6=document.getElementById('qbtn6')

qbtn6.addEventListener('click',()=>{
   let ansdiv6=document.getElementById('ansdiv6')
let plus=document.getElementsByClassName('plus')

   ansdiv6.innerHTML=`The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.</div><br>

<div>Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.</div>`
if(ansdiv6.classList.contains('ans')){
   ansdiv6.classList.remove('ans')
   ansdiv6.innerHTML=''
   plus[5].src="plus-sign-stroke-rounded.svg"
}
else
{
    ansdiv6.classList.add('ans')
    plus[5].src="cancel-01-stroke-rounded.svg"
}
})
qbtn1.addEventListener('click',()=>{
   let ansdiv1=document.getElementById('ansdiv1')
let plus=document.getElementsByClassName('plus')

   ansdiv1.innerHTML=`<div>Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.</div><br>
</div>You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week.</div>`
if(ansdiv1.classList.contains('ans')){
   ansdiv1.classList.remove('ans')
   ansdiv1.innerHTML=''
   plus[0].src="plus-sign-stroke-rounded.svg"
}
else
{
    ansdiv1.classList.add('ans')
    plus[0].src="cancel-01-stroke-rounded.svg"
}
})
qbtn2.addEventListener('click',()=>{
   let ansdiv2=document.getElementById('ansdiv2')
let plus=document.getElementsByClassName('plus')

   ansdiv2.innerHTML=`<div>Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts.</div>`
if(ansdiv2.classList.contains('ans')){
   ansdiv2.classList.remove('ans')
   ansdiv2.innerHTML=''
   plus[1].src="plus-sign-stroke-rounded.svg"
}
else
{
    ansdiv2.classList.add('ans')
    plus[1].src="cancel-01-stroke-rounded.svg"
}
})
qbtn3.addEventListener('click',()=>{
   let ansdiv3=document.getElementById('ansdiv3')
let plus=document.getElementsByClassName('plus')

   ansdiv3.innerHTML=`<div>Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.</div><br>

<div>You can also download your favourite shows with the iOS or Android app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.</div>`
if(ansdiv3.classList.contains('ans')){
   ansdiv3.classList.remove('ans')
   ansdiv3.innerHTML=''
   plus[2].src="plus-sign-stroke-rounded.svg"
}
else
{
    ansdiv3.classList.add('ans')
    plus[2].src="cancel-01-stroke-rounded.svg"
}
})
qbtn4.addEventListener('click',()=>{
   let ansdiv4=document.getElementById('ansdiv4')
let plus=document.getElementsByClassName('plus')

   ansdiv4.innerHTML=`<div>Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.</div>`
if(ansdiv4.classList.contains('ans')){
   ansdiv4.classList.remove('ans')
   ansdiv4.innerHTML=''
   plus[3].src="plus-sign-stroke-rounded.svg"
}
else
{
    ansdiv4.classList.add('ans')
    plus[3].src="cancel-01-stroke-rounded.svg"
}
})
qbtn5.addEventListener('click',()=>{
   let ansdiv5=document.getElementById('ansdiv5')
let plus=document.getElementsByClassName('plus')

   ansdiv5.innerHTML=`<div>Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.</div>`
if(ansdiv5.classList.contains('ans')){
   ansdiv5.classList.remove('ans')
   ansdiv5.innerHTML=''
   plus[4].src="plus-sign-stroke-rounded.svg"
}
else
{
    ansdiv5.classList.add('ans')
    plus[4].src="cancel-01-stroke-rounded.svg"
}
})