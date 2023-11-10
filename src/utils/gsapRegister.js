import { gsap } from 'gsap';
import { SplitText } from 'gsap/dist/SplitText';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import DrawSVGPlugin from 'gsap/dist/DrawSVGPlugin';
import ScrollToPlugin from 'gsap/dist/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);
gsap.registerPlugin(SplitText);
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(DrawSVGPlugin);
