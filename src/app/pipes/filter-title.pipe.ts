import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterTitle'
})
export class FilterTitlePipe implements PipeTransform {

  transform(items, searchTitle: string): any {
    let tabItems=[];
    if(!items) return [];
    if(!searchTitle) return items;

    searchTitle = searchTitle.toLowerCase();

    return items.filter( it => {
      return it.title.toLowerCase().includes(searchTitle);
    });
  }

}
