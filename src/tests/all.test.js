import { render, } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import AdsBox from '../components/AdsBox';
import Filter from '../components/FilterSectionFolder/Filter';
import FilterSection from '../components/FilterSectionFolder/FilterSection';
import Input from '../components/FilterSectionFolder/Input';
import SearchBar from '../components/FilterSectionFolder/SearchBar';
import SortByDate from '../components/FilterSectionFolder/SortByDate';
import SortByOrder from '../components/FilterSectionFolder/SortByOrder';
import Menu from '../components/Menu';
import Pagination from '../components/Pagination';
import TemplateModel from '../components/TemplateModel';
import Home from '../pages/Home';


const TestRestHomePage = () => {
    return (
        <BrowserRouter>
            <Home />
        </BrowserRouter>
    )
};
const TestMenu = () => {
    return (
        <BrowserRouter>
            <Menu />
        </BrowserRouter>
    )
};
const TestFilterSection = () => {
    return (
        <BrowserRouter>
            <FilterSection />
        </BrowserRouter>
    )
};
const TestInput = () => {
    return (
        <BrowserRouter>
            <Input />
        </BrowserRouter>
    )
};
const TestSearchBar = () => {
    return (
        <BrowserRouter>
            <SearchBar />
        </BrowserRouter>
    )
};
const TestFilter = () => {
    return (
        <BrowserRouter>
            <Filter />
        </BrowserRouter>
    )
};
const TestSortByDate = () => {
    return (
        <BrowserRouter>
            <SortByDate />
        </BrowserRouter>
    )
};
const TestSortByOrder = () => {
    return (
        <BrowserRouter>
            <SortByOrder />
        </BrowserRouter>
    )
};
const TestAdsBox = () => {
    return (
        <BrowserRouter>
            <AdsBox />
        </BrowserRouter>
    )
};
const TestLoader = () => {
    return (
        <BrowserRouter>
            <SortByOrder />
        </BrowserRouter>
    )
};
const TestPagination = () => {
    return (
        <BrowserRouter>
            <Pagination />
        </BrowserRouter>
    )
};
const TestTemplateModel = () => {
    return (
        <BrowserRouter>
            <TemplateModel />
        </BrowserRouter>
    )
};





describe("All page and components", () => {
    it('homepage renders without errorss', async () => {
        render(<TestRestHomePage />)
    }),
        it('menu component is without errors', async () => {
            render(<TestMenu />)
        }),
        it('filtersection component is without errors', async () => {
            render(<TestFilterSection />)
        }),
        it('input component is without errors', async () => {
            render(<TestInput />)
        }),
        it('searchbar component is without errors', async () => {
            render(<TestSearchBar />)
        }),
        it('filter component is without errors', async () => {
            render(<TestFilter />)
        }),
        it('sortbydate component is without errors', async () => {
            render(<TestSortByDate />)
        }),
        it('sortbyorder component is without errors', async () => {
            render(<TestSortByOrder />)
        }),
        it('adsbox component is without errors', async () => {
            render(<TestAdsBox />)
        }),
        it('loader component is without errors', async () => {
            render(<TestLoader />)
        }),
        it('pagination component is without errors', async () => {
            render(<TestPagination />)
        }),
        it('template_model component is without errors', async () => {
            render(<TestTemplateModel />)
        })
      
});