import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './AboutSlider.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronRight,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

const AboutSlider = () => {
  const data = [
    {
      name: 'Mark Constantine',
      position: 'Co-founder and inventor',
      imgUrl:
        'https://res.cloudinary.com/dencxhraw/image/upload/v1697109360/lush-image/about-lush/Mark%20Constantine.jpg',
      info: [
        'Mark Constantine co founded Lush with five friends and creative confidants in 1995 after the collapse of previous mail order business Cosmetics To Go. Mark has been a key driving force behind the business for 25 years and also works as part of the product development team creating hair, skincare and body creams as well as decadent Lush spa treatments.',
        'Challenging the business to create fresh, innovative and anarchic cosmetic products, it is some of Mark’s beliefs that Lush is based on and that have become the backbone of the company. Lush’s stringent and pioneering ‘against animal testing policy’ is just one example of how his strong beliefs have transformed the cosmetics industry – he introduced a Supplier Specific Boycott Policy, which means that Lush will not buy any ingredient from any supplier that tests any of its materials on animals for any purpose. This policy is unique in its field and is different and distinct from the Fixed Cut-Off Date policy employed by the Humane Cosmetics Standard.',
        'Mark’s plight against over packaging in the cosmetic industry is another. In the Channel 4 documentary ‘The Insider: Packaging is Rubbish,’ Mark highlighted just how much waste the average British citizen goes through in a lifetime and exactly where it ends up – in landfill. This is why the majority of Lush products are designed to be solid and can be sold without packaging.',
        'In the 2010 Queen’s New Years Honours list Mark and his wife Mo Constantine both received OBEs for their services to the beauty industry. Mark has been named five times since 2010 as one of London’s 1000 Most Influential People in the Environment and Business Brains categories by The Evening Standard newspaper. In 2015 Mark was named in BBC Wildlife magazine as one of the 50 most influential people in British wildlife.',
        'Mark’s enduring love and enthusiasm for his work, as well as the beauty and retail industries, remain at the heart of his determination to make Lush the company we all want it to be.',
      ],
    },
    {
      name: 'Mo Constantine',
      position: 'Co-founder and inventor',
      imgUrl:
        'https://res.cloudinary.com/dencxhraw/image/upload/v1697109378/lush-image/about-lush/Mo%20Constantine.webp',
      info: [
        'Mo Constantine: Co Founder, product inventor, manufacturing director and the mastermind behind the Bath Bomb and Shampoo Bar!',
        'Having started her professional life as a legal secretary, Mo’s career (and our bathroom shelves) took a turn for the brighter when she embraced her interest in new natural cosmetics. By the late eighties Mo was inventing exciting new concepts for the mail order company, Cosmetics to Go. Here, with training from the renowned cosmetic scientist Stan Kryztal, Mo started to specialise in inventing solid, unpreserved and unpackaged products. In 1988 her first patent was granted for the invention of the resoundingly popular solid Shampoo Bar. Since then, Mo has created some of the most memorable and creative products, the most famous being the world’s first Bath Bomb. Mo also invented the first pourable soap base together with chemist Stan, and then took it one step further and reformulated a palm oil free soap base.',
        'Now Mo can often be found in the lab at 29 High Street or (during lockdown) the shed at the side of the family home, rustling up vats of steaming soap ideas or dusty bowls of brightly coloured bath mixes, alongside Claire and Jack. If Mo isn’t there, then most likely she is visiting one of the seven international production units that she insists produce handmade products whilst ensuring excellent freshness and quality.',
      ],
    },
    {
      name: 'Rowena Bird',
      position: 'Co-founder and inventor',
      imgUrl:
        'https://res.cloudinary.com/dencxhraw/image/upload/v1697109387/lush-image/about-lush/Rowena%20Bird.webp',
      info: [
        'Meet Rowena Bird, one of Lush’s Co founders and a lady of many passions. “I work in the buying team, a new Customer Service team and mystery shopping, sit on the board, help create windows, poke my nose into ethical/environmental meetings, Black Lives Matter meetings, invent product, sit on the edge of the make up team, have a passion for the success of our partners and have an opinion on pretty much everything Lush related because I love our company with a passion.”',
        'And it’s no wonder that Rowena feels like that, as she’s been with Lush since day one, and in fact even before that! “I joined Mark, Mo & Liz on September 7th 1981, closely followed by Helen then Karl and Paul, so I have been working with them all for 39 years!”',
        'Starting her professional career as a Beauty Therapist, Rowena moved down to Poole from Northamptonshire having always wanted to live by the sea. In these early days, pre Lush as we know it, Rowena supported the business in any way she could – mixing henna, typing invoices, washing hair in Mark’s trichology clinic were all on the to do list. “Being adaptable was one of my key skills and throughout the 39 years I have flowed through the company looking for opportunities, creating catalogues, inventing packaging, writing copy, doing whatever has needed to be done.”',
        'This attitude to work has meant Rowena has embraced many opportunities including (but too many to list here!) the launch of a makeup brand B Never Too Busy To Be Beautiful, opening key shops for Lush, visiting nearly all of our Partner markets, and creating business direction with her fellow board members.',
        '“Don’t limit yourself with a job title, be a part of everything you can be, be adaptable, say YES a lot and see what happens,” she advises. “Work hard, play hard and be kind”.',
      ],
    },
    {
      name: 'Helen Ambrosen',
      position: 'Co founder and inventor',
      imgUrl:
        'https://res.cloudinary.com/dencxhraw/image/upload/v1697109400/lush-image/about-lush/Helen%20Ambrosen.webp',
      info: [
        'As Product Inventor for Lush, Helen Ambrosen enjoys exploiting the link between food and cosmetics – for which her specialist knowledge of raw ingredients has proved invaluable. Helen is responsible for the company’s highly innovative range of ultra fresh products, which are made daily using fresh, organic produce and sold in-store where they are kept on ice. Helen also has two patented product categories to her credit – solid bath oils and bath melts.',
      ],
    },
    {
      name: 'Paul Greeves',
      position: 'Co founder ',
      imgUrl: 'https://www.kmbc.edu/wp-content/uploads/2017/07/mystery-man.jpg',
      info: [
        'Paul Greeves is our International Man of Mystery. Little is known about Paul, one of Lush’s original Co Founders but we take it on excellent authority from people in the know that he has worked in many departments in Lush, showcasing his talent, over the years.',
        'Legend has it Paul joined Lush as a bio-chemist, to run the Lush labs and since then has headed up mail order, data security and even the Lush Times.',
      ],
    },
    {
      name: 'Liz Bennett',
      position: 'Co-founder ',
      imgUrl:
        'https://res.cloudinary.com/dencxhraw/image/upload/v1697109440/lush-image/about-lush/Liz%20Bennett.webp',
      info: [
        'A Tribute To Liz Bennett “Liz Bennett and I worked together all of her working life except for one month. She believed in teaching and nurturing and I believed in natural talent. As a consequence I learnt so much from her and she had to suffer me. Because we were both obsessed with beauty and hair and couldn’t find effective enough products that matched our customers’ needs we worked and worked on our formulas. Everyone who visited our herbal hair and beauty salon in those early days was experimented on without knowing it. If we travelled together on the train and an unsuspecting passenger fell asleep facing us we would discuss their hair and skin in muted tones.',
        'We gave hundreds of talks together before we even started working alongside The Body Shop. She could give advice on my stuff, and me on hers as we worked together so well.',
        'When I think back our dreams in those days have been surpassed so many times over but her standards have not. She was an example for anyone wanting to start and run a company run by and predominantly staffed by women. Today I see her influence everywhere even though she will never again take someone to one side to discuss their personal hygiene. She was kind and unassuming, balanced and considerate, outspoken to the point that I would think something and hear her say it. I hated it when she retired and miss her now she has gone. It’s the stupid things… She worried so much about a pension when we were twenty not knowing that with her talent we would do so well that her future would be much brighter and more secure than she could have imagined. I find it hard to believe that we will get together in the lab this Christmas Eve and she won’t be there. We will lift a glass of grog to her and miss her dreadfully.” ~ Mark Constantine',
      ],
    },
  ];
  const [currentSlide, setCurrentSlide] = useState(1);
  const [direction, setDirection] = useState('');
  const totalSlides = data.length;
  const chevronLeftRef = useRef();
  const chevronRightRef = useRef();
  const carouselRef = useRef();
  const sliderRef = useRef();

  // START: set Cooldown tranh manual click nhieu lan
  const [isCoolingDown, setIsCoolingDown] = useState(false);
  useEffect(() => {
    const cooldownTimeout = setTimeout(() => {
      setIsCoolingDown(false);
    }, 1000); // 1.5s cooldown = thoi gian de chuyen slide thanh cong
    return () => {
      clearTimeout(cooldownTimeout);
    };
  }, [isCoolingDown]);
  // END: set Cooldown

  const handleChevronClick = (direct) => {
    if (!isCoolingDown) {
      if (direct === 'right') {
        if (direction === 'left') {
          sliderRef.current.prepend(sliderRef.current.lastElementChild);
          setDirection('right');
        }
        setDirection('right');
        sliderRef.current.style.transform = `translateX(calc(-100% / ${totalSlides}))`;
        carouselRef.current.style.justifyContent = 'flex-start';
        if (currentSlide === totalSlides) {
          setCurrentSlide(1);
        } else {
          setCurrentSlide((prev) => prev + 1);
        }
      }

      if (direct === 'left') {
        if (direction === 'right') {
          sliderRef.current.appendChild(sliderRef.current.firstElementChild);
          setDirection('left');
        }
        sliderRef.current.style.transform = `translateX(calc(100% / ${totalSlides}))`;
        carouselRef.current.style.justifyContent = 'flex-end';
        if (currentSlide === 1) {
          setCurrentSlide(totalSlides);
        } else {
          setCurrentSlide((prev) => prev - 1);
        }
      }

      setIsCoolingDown(true);
    }
  };

  const handleSliderMove = () => {
    if (direction === 'right') {
      sliderRef.current.appendChild(sliderRef.current.firstElementChild);
    }
    if (direction === 'left') {
      sliderRef.current.prepend(sliderRef.current.lastElementChild);
    }
    sliderRef.current.style.transition = 'none';
    sliderRef.current.style.transform = 'translateX(0)';
    setTimeout(() => {
      sliderRef.current.style.transition = 'all 0.7s ease-in-out';
    });
  };

  return (
    <div className={cx('wrapper')}>
      <div className={cx('header')}>
        <h3 className={cx('slider-title')}>Meet the Founders</h3>
        <p className={cx('text')}>
          {currentSlide}/{totalSlides}
        </p>
      </div>

      <div
        className={cx('chevron-btn', 'left')}
        onClick={() => handleChevronClick('left')}
        ref={chevronLeftRef}
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </div>
      <div className={cx('carousel')} ref={carouselRef}>
        <div
          className={cx('slider')}
          ref={sliderRef}
          onTransitionEnd={handleSliderMove}
        >
          {data.map((slide, index) => {
            return (
              <div className={cx('slide')} key={index}>
                <div className={cx('slide-img')}>
                  {slide.imgUrl && (
                    <img
                      src={slide.imgUrl}
                      className={cx('img')}
                      alt='founder-img'
                    />
                  )}
                </div>
                <p className={cx('founder-name')}>{slide.name}</p>
                <p className={cx('sub-caps')}>{slide.position}</p>
                {slide.info.map((info, index) => {
                  return (
                    <p className={cx('text')} key={index}>
                      {info}
                    </p>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
      <div
        className={cx('chevron-btn', 'right')}
        onClick={() => handleChevronClick('right')}
        ref={chevronRightRef}
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </div>
    </div>
  );
};

export default AboutSlider;
