export interface People {
  id: number;
  name: string;
  avatar: string;
}

export interface Address {
  id: number;
  streetAddress: string;
  city: string;
  zipCode: string;
  country: string;
  state: string;
}

export interface DetailPeopleConstant {
  id?: number;
  name: string;
  streetAddress: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  avatar?: string;
}

export const RoutesConstant = {
  grid: {
    title: 'Grid',
    icon: 'view_module'
  },
  list: {
    title: 'List',
    icon: 'list'
  },
  details: {
    title: 'Details',
    icon: 'view_module'
  },
  add: {
    title: 'Add',
    icon: 'library_add'
  },
  edit: {
    title: 'Edit',
    icon: 'edit'
  },
  home: {
    title: 'Home',
    icon: 'home'
  }
};
