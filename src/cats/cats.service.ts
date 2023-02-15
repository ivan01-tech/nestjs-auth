import { Injectable } from '@nestjs/common';

@Injectable()
export class CatsServices {
  private CatsList = [
    {
      name: 'Bat Man',
      id: 1,
    },
    {
      name: 'Bat Man Black',
      id: 2,
    },
  ];

  async createCat(name: string) {
    this.CatsList.push({ name, id: this.CatsList.length + 1 });
  }

  async getCatByName(name: string) {
    return this.CatsList.find((cat) => cat.name == name);
  }

  async getCats() {
    return this.CatsList;
  }
}
