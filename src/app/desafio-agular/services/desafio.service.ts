import { ListDesafio } from './../models/desafio.model';
import { Injectable } from "@angular/core";


@Injectable()
export class ListDesafioService {

    private listTest: Array<any> = [
    {   id: "1",
        nome: 'José',
        dtnasc: '23/06/2000',
        sexo: 'Masculino'
    }
];

    public addList(listaDesafio: ListDesafio){
        listaDesafio.id = this.listTest.length > 0 ? (Number(this.listTest[this.listTest.length - 1].id) + 1) + '' : '1';
        this.listTest.push(listaDesafio);
    }

    public getListDesafios(id) {
    // for(let i = 0; i < this.listTest.length; i++){
    //     const item = this.listTest[i];
    //     if(item.id === id){
    //         return item;
    //     }
    // }
    return this.listTest.find(itemarray => itemarray.nome === id);

      }


}




