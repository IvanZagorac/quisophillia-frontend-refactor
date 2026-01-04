/* eslint-disable max-len */
import { useState, useEffect } from 'react';
import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';
import CustomIcon from '../../../components/Icon/CustomIcon';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../store/store';
import { fetchCategories } from '../../store/categories/categoriesSlice';
import { logoutUser } from '../../store/user/userSlice';
 
import { faStar as faStarSolid, faStar as faStarRegular, faHome, faUser, faSliders, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { FilterType } from '../../types/FilterType';
import api from '../../api/api';
import { useNavigate } from 'react-router-dom';
import { QuizType } from '@/types/QuizType';
const QuizList = () => 
{
    const dispatch = useDispatch<AppDispatch>();
    const openMenu = useSelector((state: RootState) => state.menu.openMenu);
    const { items: categories, status: categoriesStatus } = useSelector((state: RootState) => state.categories);
    const user = useSelector((state: RootState) => state.user.user);
    const navigate = useNavigate();

    const [filterValue, setFilterValue] = useState<FilterType>({ category: '', prize: 0, isFavorit: false, sorting: '' });
    const [quizCode, setQuizCode] = useState<string>('');
    const [openFilter, setOpenFilter] = useState<boolean>(false);
    const [quizData, setQuizData] = useState<QuizType[]>([])
    

    useEffect(() => 
    {
        if (categoriesStatus === 'idle') 
        {
            dispatch(fetchCategories());
        }
    }, [categoriesStatus, dispatch]);

    useEffect(() => 
    {
        getchAllQuizzes()
    }, [quizData]);

    const getchAllQuizzes = async () => 
    {
        try 
        {
            const users = await api('quiz/getAll', 'GET', filterValue)
            setQuizData(users.data);
        }
        catch (e) 
        {
            console.error(e);
            alert('Greška u dohvacanju kvizeva');
        }
    };
    

    const doLogout = async () => 
    {
        try 
        {
            if (user) 
            {
                await api('auth/logout', 'POST', { userId: user.userId });
            }
            dispatch(logoutUser());
            navigate('/login');
            alert('Successfully logged out!');
        }
        catch (e) 
        {
            console.error(e);
            alert('An error occurred during logout.');
        }
    };

    const renderDrawerContent = () => (
        <div className="flex-1 bg-background p-4">
            <Header />
            <div className="py-2.5">
                <button className="flex items-center py-3 px-5 mb-4 bg-transparent border-none cursor-pointer w-full text-left">
                    <CustomIcon icon={faHome} size='lg' color='#B4BECA' />
                    <span className="ml-2.5 text-base text-white">Home</span>
                </button>
                <button className="flex items-center py-3 px-5 mb-4 bg-transparent border-none cursor-pointer w-full text-left">
                    <CustomIcon icon={faUser} size='lg' color='#B4BECA' />
                    <span className="ml-2.5 text-base text-white">Profil</span>
                </button>
                {/* ... other nav items ... */}
            </div>
            <button onClick={doLogout} className="my-12 mx-5 max-w-xs flex items-center border border-[#1F3D5B] py-3 px-5 rounded-lg bg-transparent cursor-pointer">
                <CustomIcon icon={faArrowRightFromBracket} size='lg' color='red' />
                <span className="ml-2.5 text-base text-white">Odllogiraj me</span>
            </button>
        </div>
    );

    return (
        <div className="flex-1 bg-background">
            {openMenu && renderDrawerContent()}
            <Header />

            <main className="flex-1 px-4 tablet:px-10">
                <div className="flex flex-col mobile:flex-row justify-between items-start mobile:items-center mb-4">
                    <h1 className="text-2xl font-semibold font-lato text-[#EBECED]">Aktivni kvizovi</h1>
                    <div className='flex items-center space-x-2'>
                        <input
                            placeholder="Quiz code"
                            onChange={(e) => setQuizCode(e.target.value)}
                            className="border-b border-[#207179] text-white bg-button py-1 px-4 rounded-md outline-none placeholder-light-text"
                        />
                        <button onClick={() => setOpenFilter(!openFilter)} className="p-2 bg-transparent border-none cursor-pointer">
                            <CustomIcon icon={faSliders} color='#E8EAEE' />
                        </button>
                    </div>
                </div>

                {openFilter && (
                    <div className="bg-[#1F3D5B] p-4 rounded-lg shadow-lg my-4 text-white">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-lg font-bold">Filteri</h3>
                            <button onClick={() => setOpenFilter(false)} className="font-bold text-xl cursor-pointer">&times;</button>
                        </div>

                        {/* Sort and Category Dropdowns */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <select 
                                className="bg-[#0C2844] border border-[#2B496C] rounded-md p-2"
                                onChange={e => setFilterValue({...filterValue, sorting: e.target.value})}
                            >
                                <option value="">Sortiraj</option>
                                <option value="cijena">Po cijeni</option>
                                <option value="naziv">Po nazivu</option>
                            </select>
                            <select 
                                className="bg-[#0C2844] border border-[#2B496C] rounded-md p-2"
                                value={filterValue.category}
                                onChange={e => setFilterValue({...filterValue, category: e.target.value})}
                            >
                                <option value="">Kategorija</option>
                                {categories.map(cat => (
                                    <option key={cat.categoryId} value={cat.name}>{cat.name}</option>
                                ))}
                            </select>
                        </div>

                        {/* Price Slider */}
                        <div className="mb-4">
                            <label className="block mb-2">Cijena: 0 - 10000</label>
                            <input 
                                type="range" 
                                min="0" 
                                max="10000" 
                                value={filterValue.prize}
                                onChange={e => setFilterValue({...filterValue, prize: parseInt(e.target.value, 10)})}
                                className="w-full"
                            />
                            <span className='float-right'>{filterValue.prize}</span>
                        </div>

                        {/* Favorite Checkbox */}
                        <div className="flex items-center">
                            <input 
                                type="checkbox"
                                id="favorit"
                                checked={filterValue.isFavorit}
                                onChange={() => setFilterValue({...filterValue, isFavorit: !filterValue.isFavorit})}
                                className="w-4 h-4 text-blue-600 bg-gray-700 border-gray-600 rounded focus:ring-blue-600 ring-offset-gray-800 focus:ring-2"
                            />
                            <label htmlFor="favorit" className="ml-2">Favorit</label>
                        </div>
                    </div>
                )}
                
                <div className="flex flex-wrap mt-6">
                    {filterValue.category && <div className="flex justify-between items-center w-auto bg-[#207179] py-1 px-3 rounded-full m-1"><span className="text-white mr-2">{filterValue.category}</span><button onClick={() => setFilterValue(prev => ({ ...prev, category: '' }))} className="text-light-text text-lg cursor-pointer">X</button></div>}
                    {filterValue.prize !== 0 && <div className="flex justify-between items-center w-auto bg-[#207179] py-1 px-3 rounded-full m-1"><span className="text-white mr-2">Cijena: {filterValue.prize}</span><button onClick={() => setFilterValue(prev => ({ ...prev, prize: 0 }))} className="text-light-text text-lg cursor-pointer">X</button></div>}
                    {filterValue.isFavorit && <div className="flex justify-between items-center w-auto bg-[#207179] py-1 px-3 rounded-full m-1"><span className="text-white mr-2">Favorit: Yes</span><button onClick={() => setFilterValue(prev => ({ ...prev, isFavorit: false }))} className="text-light-text text-lg cursor-pointer">X</button></div>}
                    {filterValue.sorting && <div className="flex justify-between items-center w-auto bg-[#207179] py-1 px-3 rounded-full m-1"><span className="text-white mr-2">Sorting: {filterValue.sorting}</span><button onClick={() => setFilterValue(prev => ({ ...prev, sorting: '' }))} className="text-light-text text-lg cursor-pointer">X</button></div>}
                </div>

                <button onClick={() => navigate('/create-quiz')} className="bg-button text-white py-2 px-4 my-5 rounded-md border-none cursor-pointer text-base hover:bg-opacity-80 transition">
                    Kreiraj svoj kviz
                </button>

                <div className="pb-5 pt-2.5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full">
                    {quizData && quizData.map(item => (
                        <div key={item.id} className="bg-[#0C2844] text-white rounded-xl p-4 mb-5 shadow-md mr-5">
                            <div className="flex flex-row justify-between items-center mb-2">
                                <div className="text-[#E8EAEE] rounded-full items-center border border-[#2B496C] py-1 px-2.5 flex"><p className="text-sm font-bold text-[#E8EAEE]">{item.category}</p></div>
                                <div className="text-[#E8EAEE] rounded-full items-center border border-[#2B496C] py-1 px-2.5 flex"><p className="text-sm text-[#E8EAEE]">{item.duration}</p></div>
                                <div className="text-[#E8EAEE] rounded-full items-center border border-[#2B496C] py-1 px-2.5 flex"><p className="text-sm text-[#E8EAEE]">{item.prize}</p></div>
                                {item.isFavorite ? <CustomIcon icon={faStarSolid} color='gold' /> : <CustomIcon icon={faStarRegular} color='gold' />}
                            </div>
                            <h2 className="text-2xl font-semibold text-white mb-1">{item.title}</h2>
                            <p className="text-sm text-light-text mb-3">{item.code}</p>
                            <div className="flex flex-col mobile:flex-row justify-between items-start mobile:items-center border-t border-gray-600 pt-3">
                                <p className="text-sm italic text-light-text">Created by {item.user}</p>
                                <button
                                    onClick={() => console.log(`Apply to ${item.id}`)}
                                    disabled={item.applied}
                                    className={`${item.applied ? 'bg-[#207179]' : 'bg-button'} text-white py-1.5 px-4 rounded-2xl border-none cursor-pointer mt-2 mobile:mt-0`}
                                >
                                    <span className="text-sm text-white">{item.applied ? 'Applied' : 'Apply Now'}</span>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default QuizList;