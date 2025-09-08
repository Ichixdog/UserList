import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  userList = [
    {
      id: 1,
      name: "Иван",
      email: "Ivan@mail.ru",
      active: "Online",
      isHovered: false
    },
    {
      id: 2,
      name: "Никита",
      email: "Nikita@mail.ru",
      active: "Offline",
      isHovered: false
    },
    {
      id: 3,
      name: "Игорь",
      email: "Igor@mail.ru",
      active: "Offline",
      isHovered: false
    },
    {
      id: 4,
      name: "Дмитрий",
      email: "Dmitriy@mail.ru",
      active: "Online",
      isHovered: false
    },
    {
      id: 5,
      name: "Екатерина",
      email: "ekaterina@mail.ru",
      active: "Online",
      isHovered: false
    },
    {
    id: 6,
    name: "Сергей",
    email: "sergey@mail.ru",
    active: "Offline",
    isHovered: false
    },
    {
    id: 7,
    name: "Ольга",
    email: "olga@mail.ru",
    active: "Online",
    isHovered: false
    },
    {
      id: 8,
      name: "Андрей",
      email: "andrey@mail.ru",
      active: "Online",
      isHovered: false
    },
    {
      id: 9,
      name: "Наталья",
      email: "natalya@mail.ru",
      active: "Online",
      isHovered: false
    },
    {
      id: 10,
      name: "Андрей",
      email: "andrey2@mail.ru",
      active: "Offline",
      isHovered: false
    }
  ]

  filteredUsers = [...this.userList]

  searchText: string = ""

  searchByName(searchText: string){
    this.filteredUsers = this.userList.filter(user => {
      return user.name.toLowerCase().includes(searchText.toLowerCase())
    })
  }

  searchByStatus(event: Event){
    const selectedElement = event.target as HTMLSelectElement
    const status = selectedElement.value
    console.log(status)
    if(status != ""){
      this.filteredUsers = this.userList.filter(user => {
        return user.active.toLowerCase().includes(status.toLowerCase())
      })
    } else{
      this.filteredUsers = this.userList
    }
  }

}
