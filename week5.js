class MenuObject {
    constructor(menuName, menuLink){
        this.menuName = menuName;
        this.menuLink = menuLink;
    }
        
}
class Menu {
    constructor() {
        this.menulist = []
        this.selectedObject = null;
    }

    start() {
        let selection = this.showMenuOptions();

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
    showMenuOptions() {
        return prompt (' 0) Exit \n 1) Create New Menu Object \n 2) View Menu \n 3) Delete Menu Object');
    }

    createMenuObject() {
        let menuName = prompt('Enter name for new menu option:')
        let menuLink = prompt('Enter link destination for menu option:')
        this.menulist.push(new MenuObject(menuName, menuLink))
    }

    viewMenuObject() {
        let menuDisplay = '';
        for (let i = 0; i < this.menulist.length; i++) {
            menuDisplay += i + ') ' + this.menulist[i].menuName + ' - ' + this.menulist[i].menuLink + '\n';
        }
        alert(menuDisplay)
    }

    deleteMenuObject() {
        let index = prompt('Enter the index of the menu option you wish to delete:');
        if (index > -1 && index < this.selectedObject.menulist.length) {
            this.selectedObject.menulist.splice(index, 1)
        }
    }
}

let menu = new Menu();
menu.start();