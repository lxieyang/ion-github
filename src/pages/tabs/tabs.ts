import { Component } from '@angular/core';

import { ProfilesPage } from '../profiles/profiles';
import { ContactPage } from '../contact/contact';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ProfilesPage;
  tab2Root = ContactPage;

  constructor() {

  }
}
