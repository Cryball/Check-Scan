import { colors } from "../../../constants"

export function chooseColor(category) {
    if (category === 'Продукты питания') {
        return colors.PRODUCT
    }
    else if (category === 'Одежда и обувь') {
        return colors.CLOTHES
    }
    else if (category === 'Спортивные товары') {
        return colors.SPORT
    }
    else if (category === 'Кафе и рестораны') {
        return colors.CAFE
    }
    else {
        return colors.TEXT_GRAY
    }
}

export function backgroundPic(category) {
    if (category === 'Продукты питания') {
        return require('../../images/food.png')
    }
    else if (category === 'Одежда и обувь') {
        return require('../../images/clothes.png')
    }
    else if (category === 'Спортивные товары') {
        return require('../../images/tennis.png')
    }
    else if (category === 'Кафе и рестораны') {
        return require('../../images/restaurant.png')
    }
    else {
        return require('../../images/plus.png')
    }
}