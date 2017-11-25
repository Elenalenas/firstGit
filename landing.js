class Landing {
    constructor(browser) {
        this.getStarted = '[title="Get started"]';
        this.logIn = '[title="Log in"]';
        this.signUp = '[title="Sign up"]';
        this.signUpAndStartTrialNow = '[title="Sign up and start trial now"]';
        /*this.about = '[title="About"]';*/
        this.concepts = '[title="Concepts"]';
        this.pricing = '[title="Pricing"].nav-list__link.nav-list__link_dark';
        this.webliumHeader = '.header.header_black img';
        this.webliumFooter = '.footer_main img';
        this.about = '[title="About"]';
        /*this.blog = '[title="Blog"]';*/
        this.facebook = '[title="Facebook"]';
        this.twitter = '[title="Twitter"]';
        this.linkedin = '[title="Linkedin"]';
        this.browser = browser
    }
    goToWeblium() {
        this.browser.url('https://weblium.com')
        this.browser.waitForElementPresent(this.getStarted, 1000)
    }

    clickGetStarted() {
        this.browser.click(this.getStarted)
    }

    clickLoginButton() {
        this.browser.click(this.logIn)
    }

    clickSignUpButton(){
        this.browser.click(this.signUp)
    }

    clickSignUpAndStartTrialNow(){
        this.browser.click(this.signUpAndStartTrialNow)
    }
    
    /*clickAbout(){
        this.browser.click(this.about)*/
    }
    clickConcepts(){
        this.browser.click(this.concepts)
    }
    clickPricing(){
        this.browser.click(this.pricing)
    }
    clickWebliumHeader(){
        this.browser.click(this.webliumHeader)
    }
    clickWebliumFooter(){
        this.browser.click(this.webliumFooter)
    }
    /*clickabout(){
        this.browser.click(this.about)*/
    }
    clickBlog(){
        this.browser.click(this.blog)
    }
    clickFacebook(){
        this.browser.click(this.facebook)
    }
    clickTwitter(){
        this.browser.click(this.twitter)
    }
    clickLinkedIn(){
        this.browser.click(this.linkedin)
    }
}

module.exports = {
    Landing:Landing
}
