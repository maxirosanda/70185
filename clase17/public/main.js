const prevButton = document.getElementById("prev-button")
const nextButton = document.getElementById("next-button")

prevButton.addEventListener("click",()=>{
    const dataPage = parseInt(prevButton.getAttribute('data-page'))
    if (dataPage) {
        window.location.href = `/${dataPage}`
    }
})

nextButton.addEventListener("click",()=>{
    const dataPage = parseInt(nextButton.getAttribute('data-page'))
    if (dataPage) {
        window.location.href = `/${dataPage}`
    }
})