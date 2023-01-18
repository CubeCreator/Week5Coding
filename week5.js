class MenuObject {
    constructor(menuName, menuLink){
        this.menuName = menuName;
        this.menuLink = menuLink;
        console.log('Menu Name:', menuName, 'Menu Link:', menuLink)
    }
}
class PageObject extends MenuObject{
    constructor(menuName, menuLink, size, location){
        super(menuName, menuLink)
        this.size = size
        this.location = location
        console.log('Menu Name:', menuName, 'Menu Link:', menuLink, 'size:', size, 'location:', location)
    }
}
class Menu {
    constructor() {
        this.menulist = []
    }

    start() {
        let selection = this.showMenuOptions();
        //Selection on what event will trigger
        while (selection != 0) {
            switch (selection) {
                case '1':
                    this.createMenuObject()
                    break
                case '2':
                    this.viewMenuObject()
                    break
                case '3':
                    this.deleteMenuObject()
                    break
                case '4':
                    this.createPageObject()
                    break
                case '5':
                    this.deleteEverything()
                    break
                default:
                    selection = 0
            }
            selection = this.showMenuOptions();
        }
        //End the Program Loop if zero is entered.
        alert('Goodbye!')
    }
    //Display interface and get input for the events
    showMenuOptions() {
        return prompt (' 0) Exit \n 1) Create New Menu Object \n 2) View Menu and Page Elements \n 3) Delete Object by Index \n 4) Create New Page Element \n 5) Delete Everything');
    }
//Code for Creating New Elements to the Array
    createMenuObject() {
        let menuName = prompt('Enter name for new menu option:')
        let menuLink = prompt('Enter link destination for menu option:')
        this.menulist.push(new MenuObject(menuName, menuLink))
    }
//Code for Creating Page Elements to the Array
    createPageObject() {
        let menuName = prompt('Enter name for new page option:')
        let menuLink = prompt('Enter link destination for page option:')
        let size = prompt('What is the size you want this page element to be:')
        let location = prompt ('Where on the page do you want the page element to be:')
        this.menulist.push(new PageObject(menuName, menuLink, size, location))
    }
//Code for Displaying the Entire Array
    viewMenuObject() {
        let menuDisplay = '';
        for (let i = 0; i < this.menulist.length; i++) {
            console.log("index:",i,"menuDisplay:",menuDisplay);''
            if (this.menulist[i].size == undefined) {
                menuDisplay += i + ') ' + this.menulist[i].menuName + ' - ' + this.menulist[i].menuLink + '(Menu Object)' + '\n';
            }
            else {
                menuDisplay += i + ') ' + this.menulist[i].menuName + ' - ' + this.menulist[i].menuLink + "[Location: " + this.menulist[i].size + " Size:" +this.menulist[i].location + "] " +'(Page Object)' +'\n';
            }
            console.log(menulist[i])
        }
        alert(menuDisplay)
    }
//Code for Deleting Elements of the Array by Index Number
    deleteMenuObject() {
        let index = prompt('Enter the index of the menu option you wish to delete:');
        if (index > -1 && index < this.menulist.length) {
            console.log("index:", index, "Selected Object:", this.menulist[index])
            this.menulist.splice(index, 1)
        }
    }
//Code for deleting everything by simply emptying the array they are stored in
    deleteEverything() {
        this.menulist = []
        alert('Everything has been deleted!')
        console.log(this.menulist)
    }
}
//run the program on start
let menu = new Menu();
menu.start();