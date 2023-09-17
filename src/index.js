/* eslint-disable no-param-reassign */
const steps = document.querySelectorAll('.step-number')
const mainContents = document.querySelectorAll('.main-content')
const nextBtn = document.querySelector('.btn-next')
const preBtn = document.querySelector('.btn-back')
const infoTitle = document.querySelector('.information__title')
const infoDesc = document.querySelector('.information__description')
const navdiv = document.querySelector('.navigations')
const headings = document.querySelector('.headings ')
const cards = document.querySelectorAll('.card')
const toggle = document.getElementById('toggle')
const arcadePrice = document.querySelector('.arcade-price')
const advancedPrice = document.querySelector('.advanced-price')
const proPrice = document.querySelector('.pro-price')
const spanTime = document.querySelectorAll('.time-span')
const statusBonus = document.querySelectorAll('.status-bonus')
const addOns = document.querySelectorAll('.addons')
const duration = document.querySelector('.duration')
const price1 = document.querySelector('.add-on-price-1')
const price2 = document.querySelector('.add-on-price-2')
const price3 = document.querySelector('.add-on-price-3')
console.log(spanTime)
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
let plan = ''
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
const toggleBtnState = () => {
  if (contentStep === mainContents.length - 2) {
    console.log('come in')
    nextBtn.textContent = 'Confirm'
    nextBtn.classList.add('confirm')
  } else {
    nextBtn.textContent = 'Next Step'
    nextBtn.classList.remove('confirm')
  }
}
const next = (e) => {
  e.preventDefault()

  if (contentStep === mainContents.length - 1) return

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
  toggleBtnState()

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
  toggleBtnState()
})
const changeActive = (e, activeState, button) => {
  const change = e.currentTarget

  button.forEach((btn) => {
    // eslint-disable-next-line no-unused-expressions
    btn !== change
      ? btn.classList.remove(activeState)
      : change.classList.add(activeState)
    plan = change.dataset.plan
  })
}
cards.forEach((card) => {
  card.addEventListener('click', (e) => {
    changeActive(e, 'premium-active', cards)
  })
})
let timePlan = ''
toggle.addEventListener('click', () => {
  toggle.classList.toggle('monthly')
  if (toggle.classList.contains('monthly')) {
    timePlan = 'monthly'
    arcadePrice.textContent = '9'
    advancedPrice.textContent = '12'
    proPrice.textContent = '15'
    // eslint-disable-next-line no-multi-assign
    price1.textContent = price2.textContent = '1'
    price3.textContent = '2'
    spanTime.forEach((time) => {
      time.textContent = 'mo'
    })
    statusBonus.forEach((status) => {
      status.classList.add('hide-bonus')
    })
  } else {
    timePlan = 'yearly'
    spanTime.forEach((time) => {
      time.textContent = 'yr'
    })
    statusBonus.forEach((status) => {
      status.classList.remove('hide-bonus')
    })
    arcadePrice.textContent = '90'
    advancedPrice.textContent = '120'
    proPrice.textContent = '150'
    // eslint-disable-next-line no-multi-assign
    price1.textContent = price2.textContent = '10'
    price3.textContent = '20'
  }
})
nextBtn.addEventListener('click', next)
// loop through the list
console.log('hello world');
// if the input is checked
// add it to finishing up
// calculate the total of the finish up
// add active class to the list item
// else remove active
