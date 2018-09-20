import { Component } from '@angular/core';
import { Router } from '@angular/router';
const items: any[] = [{
  text: 'Item1',
  items: [{ text: 'Item1.1' }, { text: 'Item1.2', items: [{ text: 'Item1.2.1' }, { text: 'Item1.2.2' }] }]
}, {
  text: 'Item2',
  items: [{ text: 'Item2.1' }, { text: 'Item2.2' }, { text: 'Item2.3' }]
}, {
  text: 'Item3'
}];
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})


export class MenuComponent {
  public items: any[] = items;
  constructor(private router: Router) {
    this.items = this.mapItems(router.config);
}

// convert the routes to menu items.
private mapItems(routes: any[], path?: string): any[] {
    return routes.map(item => {
        const result: any = {
            text: item.text,
            path: (path ? `${ path }/` : '') + item.path
        };

        if (item.children) {
            result.items = this.mapItems(item.children, item.path);
        }

        return result;
    });
}

}
