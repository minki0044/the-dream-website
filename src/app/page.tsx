import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Navbar } from "@/components/Navbar";
import { MemberImage } from "@/components/MemberImage";
import Image from "next/image";
import { 
  DocumentTextIcon, 
  CurrencyDollarIcon, 
  BuildingOfficeIcon 
} from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="min-h-[64vh] px-4 relative flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-bg.jpg"
            alt="Background"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-6xl font-bold mb-6 text-white">Protecting Ideas, Designing Value</h1>
          <div className="space-y-4">
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              기술의 보호를 넘어, 기술의 가치를 함께 설계합니다.
            </p>
            <p className="text-lg text-gray-200 max-w-2xl mx-auto">
              The Dream은 IP 전략과 평가를 아우르는 특허 파트너입니다.
            </p>
          </div>
        </div>
      </section>

      {/* Practice Areas Section */}
      <section id="practice-areas" className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">업무 영역</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-blue-100 rounded-full">
                <DocumentTextIcon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">지식재산 출원 및 분쟁</h3>
              <p className="text-gray-600 text-sm">
                특허, 실용신안, 상표, 디자인, 저작<br />
                출원 및 분쟁 등을 해결해 드립니다.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-green-100 rounded-full">
                <CurrencyDollarIcon className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">기술 금융</h3>
              <p className="text-gray-600 text-sm">
                기술, 지식재산권을 활용한<br />
                자금 조달 등을 해결해 드립니다.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-purple-100 rounded-full">
                <BuildingOfficeIcon className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">기술기업 컨설팅</h3>
              <p className="text-gray-600 text-sm">
                IP 창출, 창업, 인증, 연구소 설립 등<br />
                기술 문제를 해결해 드립니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section id="members" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">The Dream의 전문가를 소개합니다</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Member 1 */}
            <div className="flex flex-col sm:flex-row items-center gap-4 min-w-0">
              <div className="w-32 h-32 flex-shrink-0">
                <MemberImage src="/member1.jpg" alt="김 영 상" name="김 영 상" />
              </div>
              <div className="text-center sm:text-left flex-1 min-w-0">
                <h3 className="text-xl font-semibold mb-2">김 영 상</h3>
                <p className="text-gray-600 mb-2 text-sm">대표 변리사</p>
                <a href="mailto:yskim@dreampat.com" className="text-blue-600 hover:text-blue-800 text-sm break-all">
                  yskim@dreampat.com
                </a>
              </div>
            </div>

            {/* Member 2 */}
            <div className="flex flex-col sm:flex-row items-center gap-4 min-w-0">
              <div className="w-32 h-32 flex-shrink-0">
                <MemberImage src="/member2.jpg" alt="김 현 수" name="김 현 수" />
              </div>
              <div className="text-center sm:text-left flex-1 min-w-0">
                <h3 className="text-xl font-semibold mb-2">김 현 수</h3>
                <p className="text-gray-600 mb-2 text-sm">대표 변리사</p>
                <a href="mailto:hskim@dreampat.com" className="text-blue-600 hover:text-blue-800 text-sm break-all">
                  hskim@dreampat.com
                </a>
              </div>
            </div>

            {/* Member 3 */}
            <div className="flex flex-col sm:flex-row items-center gap-4 min-w-0">
              <div className="w-32 h-32 flex-shrink-0">
                <div className="w-full h-full rounded overflow-hidden bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-400">사진 추가 예정</span>
                </div>
              </div>
              <div className="text-center sm:text-left flex-1 min-w-0">
                <h3 className="text-xl font-semibold mb-2">송 해 성</h3>
                <p className="text-gray-600 mb-2 text-sm">파트너 변리사</p>
                <a href="mailto:hssong@dreampat.com" className="text-blue-600 hover:text-blue-800 text-sm break-all">
                  hssong@dreampat.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div id="contact">
              <h3 className="text-xl font-bold mb-4">Contact us</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">찾아오시는 길</h4>
                  <p className="text-gray-400 text-sm">서울시 강남구 논현로 72길 33 (역삼동) 이주빌딩 302호</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">연락처</h4>
                  <p className="text-gray-400 text-sm">
                    Tel. 02 562 3770 · 3771<br />
                    Fax. 02 562 3772
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 The Dream IP Consulting Group. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
