
export default function Home(){
    const placeForTypewriterText = document.querySelector('span')
    let typewriterText = 'concerts'
    let l = 0
    const typeSpeed = 150
    const typingEffect = () => {
        if (l<typewriterText.length && typewriterText === 'concerts'){
            placeForTypewriterText.innerHTML += typewriterText.charAt(l)
            l++
            setTimeout(typingEffect,typeSpeed)
        } else if (l===typewriterText.length && typewriterText === 'concerts'){
            setTimeout(()=>{
            l=0
            typewriterText = 'sports'
            placeForTypewriterText.innerHTML = ''
            setTimeout(typingEffect, 100)
            }
            ,700)
        } else if (l<typewriterText.length && typewriterText === 'sports'){
            placeForTypewriterText.innerHTML += typewriterText.charAt(l)
            l++
            setTimeout(typingEffect,typeSpeed)
        } else if (l===typewriterText.length && typewriterText === 'sports'){
            setTimeout(()=>{
            l=0
            typewriterText = 'concerts'
            placeForTypewriterText.innerHTML = ''
            setTimeout(typingEffect,100)
        },700)
        }
    }
    typingEffect()
    return(
        <h1>A place to see <span></span></h1>
    )
}