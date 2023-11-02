

const getHomePage = (req ,res) => {
    res.send('Hello! con')
}


const sampleCLB = (req ,res) => {
    const data = { title: 'Hello, youuuu!' }
    res.render('sample.ejs', data)
}

module.exports = {
    getHomePage,sampleCLB,
}
