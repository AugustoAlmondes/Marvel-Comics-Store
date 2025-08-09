// import './useScrollToTop.module.css';
// import styles from './useScrollToTop.module.css';
import { useEffect } from "react";
import { useLocation } from "react-router";


export default function useScrollToTop() {

    const {pathname} = useLocation();

    useEffect(() =>{
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
    },[pathname])
}