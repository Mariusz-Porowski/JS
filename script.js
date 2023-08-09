const sizeUpBtn = document.querySelector('.sizeUp')
const sizeDownBtn = document.querySelector('.sizeDown')
const colorBtn = document.querySelector('.color')
const paragraph = document.querySelector('p')

let fontSize = 36

const sizeUp = () => {
	if (fontSize >= 48) return
	fontSize += 3
	paragraph.style.fontSize = fontSize + 'px'
}
const sizeDown = () => {
	if (fontSize <= 21) return

	fontSize -= 3
	paragraph.style.fontSize = fontSize + 'px'
}
const color = () => {
	const r = Math.floor(Math.random() * 255)
	const g = Math.floor(Math.random() * 255)
	const b = Math.floor(Math.random() * 255)

	paragraph.style.color = `rgb(${r},${g},${b})`
}

sizeUpBtn.addEventListener('click', sizeUp)
sizeDownBtn.addEventListener('click', sizeDown)
colorBtn.addEventListener('click', color)

