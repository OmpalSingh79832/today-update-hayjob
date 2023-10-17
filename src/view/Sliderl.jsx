import { } from "react";
import styled, { keyframes, css } from "styled-components";

function Sliderl() {
  const row1 = [
    "https://media.foundit.in/trex/prod-cdn/media/promotedemployer/2023/january/Dd5e9M2ngHQkAEP9s2Hu6agZh9EvDYHZQBaPs5xy.jpeg",
    "https://media.foundit.in/trex/prod-cdn/media/promotedemployer/2023/september/N2zW75QqgL2iUuUUDmrc3vVPu7P3g0fW1WNi82Ph.jpeg",
    "https://media.foundit.in/trex/prod-cdn/media/promotedemployer/2023/january/HN5y7hp89MHcEWgrSi9haJG4iDYWE3DHH0RvvEau.jpeg",
    "https://media.foundit.in/trex/prod-cdn/media/promotedemployer/2022/april/Mp2fRLKl9YmxG7YBxanGbRYdkzMayIcwhiEe8HyD.jpeg",
    "https://media.foundit.in/trex/prod-cdn/media/promotedemployer/2023/july/yynMGMz9qDDEqNQPLmijAa0FqfdmRuUNrI1icveZ.jpeg",
    "https://media.foundit.in/trex/prod-cdn/media/promotedemployer/2023/february/Zw3suPwERv1Pb9pmRxKGti1T1SNRqyS7caf3j3Uq.jpeg",
    "https://media.foundit.in/trex/prod-cdn/media/promotedemployer/2023/march/QEzey8P9T3AkU5VMMm2LRXyyUXhH5JxA75GVWiK8.jpeg",
    "https://media.foundit.in/trex/prod-cdn/media/promotedemployer/2023/october/jgrsZbv93knv0ZbfyrVRjuGactExcDQZ7L31k4nf.jpeg",
    "https://media.foundit.in/trex/prod-cdn/media/promotedemployer/2023/october/YReWYFMk24w9ourRJ2RxQf1k81sJU14UyDHrvKgU.jpeg",
    "https://media.foundit.in/trex/prod-cdn/media/promotedemployer/2023/august/yTKoftvbNtE2p1x5VqUo5NDOUfwnH2SSOL0BolFB.jpeg",
    "https://media.foundit.in/trex/prod-cdn/media/promotedemployer/2023/september/15WS2PQ92d4ic3bvZcKPVBpvR7OwXuTdjW94riUL.jpeg",
  ];



  return (
    <AppContainer >
      {/* <Wrapper >
        <Text>Employers of Choice</Text>

        <Marquee >
          <MarqueeGroup >
            {row1.map((el) => (
              <ImageGroup >
                <Image src={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup>
          <MarqueeGroup>
            {row1.map((el) => (
              <ImageGroup >
                <Image src={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup>
        </Marquee>
      </Wrapper> */}
    </AppContainer>
  );
}

export default Sliderl;

const AppContainer = styled.div`
  width: 100vw;
  height: 28vh;
  color: #000000;

  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  flex-direction: column;
`;

const Text = styled.div`
  font-size: 30px;
  font-family: Verdana, Arial, Helvetica, sans-serif;
  margin-left: 40px;
  font-weight: 600;
  margin-bottom: 0px;
  color: #02203c;
`;

const Marquee = styled.div`
  display: flex;
  width: 1700px;
  overflow: hidden;
  user-select: none;

  mask-image: linear-gradient(
    to right,
    hsl(0 0% 0% / 0),
    hsl(0 0% 0% / 1) 10%,
    hsl(0 0% 0% / 1) 90%,
    hsl(0 0% 0% / 0)
  );
`;

const scrollX = keyframes`
  from {
    left: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const common = css`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  white-space: nowrap;
  width: 100%;
  animation: ${scrollX} 30s linear infinite;
`;

const MarqueeGroup = styled.div`
  ${common}
`;
const MarqueeGroup2 = styled.div`
  ${common}
  animation-direction: reverse;
  animation-delay: -3s;
`;

const ImageGroup = styled.div`
  display: grid;
  place-items: center;
  ${'' /* width: clamp(10rem, 1rem + 40vmin, 30rem); */}
  padding: calc(clamp(10rem, 1rem + 30vmin, 30rem) / 10);
`;

const Image = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
  /* border: 1px solid black; */
  border-radius: 0.5rem;
  aspect-ratio: 16/9;
  padding: 5px 20px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;