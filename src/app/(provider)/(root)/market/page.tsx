'use client';

import FilterButton from '@/components/ui/FilterButton';
import { Market } from '@/types/Market';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { GoHeart } from 'react-icons/go';
import { GoHeartFill } from 'react-icons/go';
export type TotalMarketImagesType = {
  image:
    | {
        title: string;
        link: string;
        thumbnail: string;
        sizeheight: string;
        sizewidth: string;
      }[]
    | null;
  시장명: string;
  도로명주소: string;
  시도: string;
  error: any;
}[];

const MarketPage = () => {
  const [markets, setMarkets] = useState<Market[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [images, setImages] = useState<TotalMarketImagesType | null>(null);
  const [loading, setLoading] = useState(false);
  const [heart, setHeart] = useState<string[]>([]);
  const [filteredMarkets, setFilteredMarkets] =
    useState<TotalMarketImagesType | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('전체');

  // 시장 데이터 불러오는 API
  const fetchMarkets = async (page: number) => {
    try {
      const response = await fetch(`/api/market/marketList?page=${page}`);
      const { data } = await response.json();
      setMarkets(data);
    } catch (error) {
      console.error('데이터를 가져오지 못했습니다.', error);
    }
  };

  const marketFilterButtons = [
    '전체',
    '경기도',
    '서울특별시',
    '인천광역시',
    '대전광역시',
    '세종특별자치시',
    '충청남도',
    '충청북도',
    '광주광역시',
    '전라남도',
    '전라북도',
    '경상북도',
    '대구광역시',
    '경상남도',
    '부산광역시',
    '울산광역시',
    '강원도',
    '제주특별자치도'
  ];
  useEffect(() => {
    fetchMarkets(currentPage);
  }, [currentPage]);

  useEffect(() => {
    const fetchImages = async () => {
      setLoading(true);
      const results: TotalMarketImagesType = [];

      for (const market of markets) {
        try {
          const response = await fetch(
            `/api/market/marketImage?query=${encodeURIComponent(
              market.시장명
            )}&display=2`
          );
          const data = await response.json();
          results.push({
            시장명: market.시장명,
            도로명주소: market.도로명주소,
            시도: market.시도,
            image: data,
            error: null
          });
        } catch (error: any) {
          results.push({
            시장명: market.시장명,
            도로명주소: market.도로명주소,
            시도: market.시도,
            image: null,
            error: error.message
          });
        }

        // 각 요청 사이에 0.15초 지연 추가(요청 속도가 너무 빨라서 이미지를 찾아올 수 가 없다는 에러발생)
        await new Promise((resolve) => setTimeout(resolve, 150));
      }

      setImages(results); // 시장 데이터 초기값(전체 필터 버튼 눌렀을때 초기상태)
      setFilteredMarkets(results);
      setLoading(false);
    };

    if (markets.length > 0) {
      fetchImages();
    }
  }, [markets]);

  if (!images) return <div>로딩 중...</div>;

  const handleHeart = (identity: string) => {
    if (!heart.includes(identity)) setHeart((prev) => [...prev, identity]);
    else setHeart((prev) => prev.filter((el) => el !== identity));
  };

  const handleClickFilterButton = (region: string) => {
    setActiveFilter(region);
    if (region === '전체') setFilteredMarkets(images);
    else setFilteredMarkets(images.filter((image) => image.시도 === region)); //images안에 item(시장정보)이 들어가있음
  };

  const totalPages = Math.ceil(1388 / 10);

  return (
    <>
      <div className="flex w-full">
        {marketFilterButtons.map((region) => (
          <div key={region} className="w-full">
            <FilterButton
              key={region}
              onClick={() => handleClickFilterButton(region)}
              isActive={activeFilter === region}
            >
              {region}
            </FilterButton>
          </div>
        ))}
      </div>
      <div>
        {loading ? (
          <p>로딩중...</p>
        ) : (
          filteredMarkets?.map((item, index) => (
            <div key={index}>
              <Link
                href={`/market/${encodeURIComponent(
                  item.시장명
                )}/${encodeURIComponent(item.도로명주소)}?page=${currentPage}`}
              >
                <h3>{item.시장명}</h3>
                <h2>{item.도로명주소}</h2>
                <div className="relative w-[140px] h-[140px]">
                  {item.image ? (
                    <Image
                      src={item.image[0]?.link}
                      alt={item.시장명}
                      fill
                      sizes="(max-width: 768px) 100vw, 343px"
                      priority
                      className="absolute w-full h-full"
                      style={{ objectFit: 'cover' }}
                    />
                  ) : (
                    <p style={{ color: 'red' }}>Error: {item.error}</p>
                  )}
                </div>
              </Link>
              <button onClick={() => handleHeart(item.도로명주소)}>
                {heart.includes(item.도로명주소) ? (
                  <GoHeartFill style={{ color: 'red ' }} />
                ) : (
                  <GoHeart />
                )}
              </button>
            </div>
          ))
        )}
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '20px'
        }}
      >
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          prev
        </button>
        <div>
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index + 1}
              onClick={() => setCurrentPage(index + 1)}
              style={{
                fontWeight: currentPage === index + 1 ? 'bold' : 'normal',
                margin: '0 5px'
              }}
            >
              {index + 1}
            </button>
          ))}
        </div>
        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
        >
          next
        </button>
      </div>
    </>
  );
};

export default MarketPage;
