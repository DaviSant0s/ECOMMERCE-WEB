import './styles.css';

import { useCategories } from '../../context/categoriesContext/categoriesProvider.jsx'
import { useEffect } from 'react';
import { getAllCategories } from '../../api/categoriesApi.js';

const MenuHeader = () => {

    const { categoryState, categoryDispatch } = useCategories();
    
    useEffect(() => {
      getAllCategories(categoryDispatch);
    }, []);

    const renderCategories = (categories) => {

      return categories.map(category => (
        <li key={category.name}>
          { category.parentId ? <a href={category.slug}>{category.name}</a> : <span>{category.name}</span> }
          { category.children.length > 0 && <ul>{renderCategories(category.children)}</ul> }
        </li>
      ));
    
    }

    return (
        <div className='menuHeaderContainer'>
            <ul>
              {categoryState.categories && renderCategories(categoryState.categories)}
            </ul>
        </div>
    );
};

export default MenuHeader;