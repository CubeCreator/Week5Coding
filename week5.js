class MenuObject {
    constructor(menuName, menuLink){
        this.menuName = menuName;
        this.menuLink = menuLink;
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
                default:
                    selection = 0
            }
            selection = this.showMenuOptions();
        }
        alert('Goodbye!')
    }
    //Display interface and get input for the events
    showMenuOptions() {
        return prompt (' 0) Exit \n 1) Create New Menu Object \n 2) View Menu \n 3) Delete Menu Object');
    }
//Code for Creating New Elements to the Array
    createMenuObject() {
        let menuName = prompt('Enter name for new menu option:')
        let menuLink = prompt('Enter link destination for menu option:')
        this.menulist.push(new MenuObject(menuName, menuLink))
    }
//Code for Displaying the Entire Array
    viewMenuObject() {
        let menuDisplay = '';
        for (let i = 0; i < this.menulist.length; i++) {
            console.log("index:",i,"menuDisplay:",menuDisplay);
            menuDisplay += i + ') ' + this.menulist[i].menuName + ' - ' + this.menulist[i].menuLink + '\n';
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
}
//run the program on start
let menu = new Menu();
menu.start();