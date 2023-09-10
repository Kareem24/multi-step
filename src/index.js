const steps = document.querySelectorAll('.step-number')
const mainContents = document.querySelectorAll('.main-content')
const nextBtn = document.querySelector('.btn-next')
const preBtn = document.querySelector('.btn-back')
const infoTitle = document.querySelector('.information__title')
const infoDesc = document.querySelector('.information__description')
const navdiv = document.querySelector('.navigations')
const headings = document.querySelector('.headings ')
const data = [
  {
    id: 0,
    heading: 'Personal info',
    subHeading: 'Please provide your name, email address and phone number.',
  },
  {
    id: 1,
    heading: 'Select your plan',
    subHeading: 'You have the option of monthly or yearly billing.',
  },
  {
    id: 2,
    heading: 'Pick add-ons',
    subHeading: 'Add-ons help enhance your gaming experience.',
  },
  {
    id: 3,
    heading: 'Finishing up',
    subHeading: 'Double-check everything looks OK before confirming.',
  },
]
console.log(mainContents)
let step = 0
let contentStep = 0
mainContents.forEach((content, i) => {
  content.setAttribute('data-id', i)
})
console.log(data)
function changeContent() {
  mainContents.forEach((content) => {
    if (!content.classList.contains('hidden')) {
      content.classList.add('hidden')
    }
    if (contentStep === +content.dataset.id) {
      content.classList.remove('hidden')
    }
  })
}
const changeHeading = () => {
  infoTitle.textContent = data[step].heading
  infoDesc.textContent = data[step].subHeading
}
const stepActive = () => {
  steps.forEach((stepNum) => {
    stepNum.classList.remove('active')
  })

  steps[step].classList.add('active')
}
const next = (e) => {
  e.preventDefault()
  if (step === steps.length - 2) {
    nextBtn.textContent = 'Confirm'
  } else {
    nextBtn.textContent = 'Next Step'
  }

  if (contentStep === mainContents.length - 1) {
    contentStep = mainContents.length - 1
    return
  }
  contentStep++
  changeContent()
  if (step === steps.length - 1) {
    step = steps.length - 1
    navdiv.classList.add('hidden')
    headings.classList.add('hidden')
    return
  }
  step++
  changeHeading()
  stepActive()
}
preBtn.addEventListener('click', (e) => {
  e.preventDefault()
  if (contentStep === 0) return
  contentStep--
  changeContent()
  if (step === 0) return
  step--
  stepActive()
  changeHeading()
})

nextBtn.addEventListener('click', next)
