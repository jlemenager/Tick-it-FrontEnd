
export default function Home(){
    let placeForTypewriterText = ''
    let typewriterText = 'concerts'
    let l = 0
    const typeSpeed = 150
    const typingEffect = () => {
        if (l<typewriterText.length && typewriterText === 'concerts'){
            placeForTypewriterText += typewriterText.charAt(l)
            l++
            setTimeout(typingEffect,typeSpeed)
        } else if (l===typewriterText.length && typewriterText === 'concerts'){
            setTimeout(()=>{
            l=0
            typewriterText = 'sports'
            placeForTypewriterText = ''
            setTimeout(typingEffect, 100)
            }
            ,700)
        } else if (l<typewriterText.length && typewriterText === 'sports'){
            placeForTypewriterText += typewriterText.charAt(l)
            l++
            setTimeout(typingEffect,typeSpeed)
        } else if (l===typewriterText.length && typewriterText === 'sports'){
            setTimeout(()=>{
            l=0
            typewriterText = 'concerts'
            placeForTypewriterText = ''
            setTimeout(typingEffect,100)
        },700)
        }
    }
    typingEffect()
    return(
        <h1>Want to go to a <span>concert or sporting event</span>?</h1>
    )
}