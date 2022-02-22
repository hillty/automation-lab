const {Builder, Capabilities, By}  = require('selenium-webdriver')

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://127.0.0.1:5501/movieList/index.html')
})

afterAll(async () => {
    await driver.quit()
})

// this will add a movie, cross it off, un-cross it, and delete it from the page
test('movie tests', async () => {
    // this will add a movie 
    const inputField = await driver.findElement(By.xpath('//input'))
    await inputField.sendKeys('Movie')
    await driver.sleep(2000)

    const movieButton = await driver.findElement(By.css('button'))
    await movieButton.click()
    await driver.sleep(2000)
    
    // this will cross out the movie
    const movieCross = await driver.findElement(By.xpath("//li/span"))
    await movieCross.click()
    await driver.sleep(2000)

    // this will uncross the movie
    await movieCross.click()
    await driver.sleep(2000)

    
    // this will delete the movie
    const deleteBtn = await driver.findElement(By.xpath("//*[text()='x']"))
    await deleteBtn.click()
    await driver.sleep(2000) 

})