'use client';
import { useUser } from '@/hooks/useUser';
import Image from 'next/image';
import React, { useState } from 'react';

const CouponPage = () => {
  const { data: user, isLoading, error } = useUser();
  //   console.log(user);

  const [activeTab, setActiveTab] = useState('coupons');

  return (
    <div className=" p-4 bg-normal">
      <div className="border-4 border-[#F2F2F2]" />

      <div className="flex mt-[15px] mx-auto w-[95%] justify-between items-center">
        <div>
          <button
            className={`px-6 py-2 border-b-4 text-[16px] ${
              activeTab === 'coupons'
                ? 'text-primary-20 border-primary-20'
                : 'text-label-assistive border-transparent'
            }`}
            onClick={() => setActiveTab('coupons')}
          >
            사용 가능 쿠폰
          </button>
        </div>

        <div>
          <button
            className={`px-6 py-2 border-b-4 text-[16px] ${
              activeTab === 'download'
                ? 'text-primary-20 border-primary-20'
                : 'text-label-assistive border-transparent'
            }`}
            onClick={() => setActiveTab('download')}
          >
            쿠폰 다운로드
          </button>
        </div>
      </div>

      <div className="border border-[#F2F2F2]" />

      <div>
        {activeTab === 'coupons' && user?.coupon && (
          <Image
            src={user?.coupon}
            alt="profile"
            width={343}
            height={343}
            className="w-{343px} h-{343px} mt-[15px]"
          />
        )}
      </div>

      <div className="flex justify-center items-center">
        {activeTab === 'download' && (
          <div className="flex-col items-center mt-[15px]">
            <Image
              src="/image/StateSad.png"
              alt="쿠폰없을때"
              width={100}
              height={100}
              className="w-{100px} h-{100px} mx-auto"
            />
            <p className="text-label-assistive mt-4">
              {' '}
              다운로드 가능한 쿠폰이 없어요
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CouponPage;
