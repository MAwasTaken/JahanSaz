// react
import React from 'react';
import Title from '../Title/Title';
import DiamondBox from '../DiamondBox/DiamondBox';

// styles

// packages

// components

// about us
function AboutUs() {
	return (
		<div className="flex h-auto flex-col">
			{/* dots */}
			<div className="mt-5 flex items-center justify-center lg:mt-[30px]">
				<div className=" flex h-[75px] w-[75px] items-center justify-center lg:h-[130px] lg:w-[130px] ">
					<svg
						width="78"
						height="46"
						viewBox="0 0 78 46"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M8.53125 4.71875C8.53125 5.52224 8.29299 6.30768 7.8466 6.97576C7.4002 7.64383 6.76573 8.16453 6.0234 8.47201C5.28108 8.7795 4.46425 8.85995 3.6762 8.70319C2.88815 8.54644 2.16428 8.15952 1.59613 7.59137C1.02798 7.02322 0.641064 6.29936 0.484312 5.51131C0.327559 4.72326 0.40801 3.90642 0.715491 3.1641C1.02297 2.42177 1.54367 1.7873 2.21175 1.34091C2.87982 0.894514 3.66527 0.656252 4.46875 0.656252C5.54619 0.656263 6.5795 1.08428 7.34136 1.84614C8.10323 2.60801 8.53124 3.64131 8.53125 4.71875ZM39 0.656252C38.1965 0.656252 37.4111 0.894514 36.743 1.34091C36.0749 1.7873 35.5542 2.42177 35.2467 3.1641C34.9393 3.90642 34.8588 4.72326 35.0156 5.51131C35.1723 6.29936 35.5592 7.02322 36.1274 7.59137C36.6955 8.15952 37.4194 8.54644 38.2075 8.70319C38.9955 8.85995 39.8123 8.7795 40.5547 8.47201C41.297 8.16453 41.9315 7.64383 42.3779 6.97576C42.8242 6.30768 43.0625 5.52224 43.0625 4.71875C43.0625 4.18525 42.9575 3.65698 42.7533 3.16408C42.5491 2.67119 42.2499 2.22334 41.8727 1.8461C41.4954 1.46886 41.0476 1.16961 40.5547 0.96546C40.0618 0.761306 39.5335 0.656237 39 0.656252ZM73.5312 8.78125C74.3347 8.78125 75.1202 8.54299 75.7883 8.0966C76.4563 7.65021 76.977 7.01573 77.2845 6.27341C77.592 5.53108 77.6724 4.71425 77.5157 3.9262C77.3589 3.13815 76.972 2.41428 76.4039 1.84613C75.8357 1.27798 75.1119 0.891064 74.3238 0.734312C73.5358 0.577559 72.7189 0.65801 71.9766 0.965491C71.2343 1.27297 70.5998 1.79367 70.1534 2.46175C69.707 3.12982 69.4688 3.91527 69.4688 4.71875C69.4688 5.79619 69.8968 6.8295 70.6586 7.59136C71.4205 8.35323 72.4538 8.78124 73.5312 8.78125ZM4.46875 37.2188C3.66527 37.2188 2.87982 37.457 2.21175 37.9034C1.54367 38.3498 1.02297 38.9843 0.715491 39.7266C0.40801 40.4689 0.327559 41.2858 0.484312 42.0738C0.641064 42.8619 1.02798 43.5857 1.59613 44.1539C2.16428 44.722 2.88815 45.109 3.6762 45.2657C4.46425 45.4225 5.28108 45.342 6.0234 45.0345C6.76573 44.727 7.4002 44.2063 7.8466 43.5383C8.29299 42.8702 8.53125 42.0847 8.53125 41.2813C8.53127 40.7478 8.4262 40.2195 8.22204 39.7266C8.01789 39.2337 7.71865 38.7858 7.34141 38.4086C6.96417 38.0314 6.51631 37.7321 6.02342 37.528C5.53053 37.3238 5.00225 37.2187 4.46875 37.2188ZM39 37.2188C38.1965 37.2188 37.4111 37.457 36.743 37.9034C36.0749 38.3498 35.5542 38.9843 35.2467 39.7266C34.9393 40.4689 34.8588 41.2858 35.0156 42.0738C35.1723 42.8619 35.5592 43.5857 36.1274 44.1539C36.6955 44.722 37.4194 45.109 38.2075 45.2657C38.9955 45.4225 39.8123 45.342 40.5547 45.0345C41.297 44.727 41.9315 44.2063 42.3779 43.5383C42.8242 42.8702 43.0625 42.0847 43.0625 41.2813C43.0625 40.7478 42.9575 40.2195 42.7533 39.7266C42.5491 39.2337 42.2499 38.7858 41.8727 38.4086C41.4954 38.0314 41.0476 37.7321 40.5547 37.528C40.0618 37.3238 39.5335 37.2187 39 37.2188ZM73.5312 37.2188C72.7278 37.2188 71.9423 37.457 71.2742 37.9034C70.6062 38.3498 70.0855 38.9843 69.778 39.7266C69.4705 40.4689 69.3901 41.2858 69.5468 42.0738C69.7036 42.8619 70.0905 43.5857 70.6586 44.1539C71.2268 44.722 71.9506 45.109 72.7387 45.2657C73.5267 45.4225 74.3436 45.342 75.0859 45.0345C75.8282 44.727 76.4627 44.2063 76.9091 43.5383C77.3555 42.8702 77.5938 42.0847 77.5938 41.2813C77.5938 40.7478 77.4887 40.2195 77.2845 39.7266C77.0804 39.2337 76.7811 38.7858 76.4039 38.4086C76.0267 38.0314 75.5788 37.7321 75.0859 37.528C74.593 37.3238 74.0648 37.2187 73.5312 37.2188Z"
							fill="#4B5563"
						/>
					</svg>
				</div>
			</div>
			{/* title */}
			<Title haveButton={false} titleText="درباره جهان‌ساز" />
			{/* diamond boxes */}
			<div className="mb-10 mt-5 flex flex-wrap items-center justify-center gap-16 lg:mt-10 lg:h-[300px] lg:gap-x-[150px]">
				<DiamondBox text="تضمین بهترین قیمت">
					<svg
						className="h-16 w-16 lg:h-28 lg:w-28"
						viewBox="0 0 58 36"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M56.5563 1.4755C56.0267 0.945355 55.3215 0.653519 54.5724 0.653519C54.5724 0.653519 20.5888 0.643921 20.5731 0.643921H20.5713C20.5644 0.643921 20.5587 0.647622 20.5519 0.647853L2.93749 0.652941C2.18778 0.653519 1.48316 0.945355 0.953018 1.4755C0.423456 2.00621 0.131618 2.71083 0.132081 3.45997L0.133815 11.5684C0.133815 11.749 0.21799 11.919 0.361365 12.0285C0.50474 12.1374 0.69055 12.1736 0.86549 12.1256C1.26301 12.0161 1.6559 11.9607 2.03192 11.9607H2.03365C3.38519 11.9607 4.66169 12.5784 5.62716 13.7002C6.6146 14.8474 7.15884 16.3779 7.15942 18.0101C7.16 19.6428 6.61691 21.1745 5.62993 22.3218C4.66447 23.4447 3.38797 24.0634 2.03527 24.0634H2.03018C1.65475 24.0634 1.26405 24.008 0.87 23.8991C0.693903 23.8494 0.508672 23.8872 0.365875 23.9962C0.221922 24.1057 0.137746 24.2757 0.137746 24.4563L0.140059 32.5506C0.140059 33.3004 0.431897 34.005 0.962615 34.5351C1.49218 35.0647 2.19622 35.356 2.94535 35.356H2.94651L54.5724 35.3465C55.3215 35.3465 56.0267 35.0546 56.5563 34.5245C57.0864 33.9938 57.3783 33.2891 57.3777 32.54V3.45997C57.3783 2.71083 57.0863 2.00621 56.5563 1.4755ZM56.2214 32.5401C56.2214 32.981 56.0504 33.3954 55.7387 33.7071C55.427 34.0188 55.0127 34.1904 54.5723 34.1904L24.9055 34.2C24.1586 34.2 23.5127 33.7055 23.3157 32.9907L23.218 28.9591C23.2096 28.6395 22.9493 28.3691 22.6258 28.3951C22.3068 28.4029 22.0545 28.6677 22.0617 28.9873L22.159 32.9978C21.9792 33.666 21.4093 34.1283 20.7295 34.1944L2.94639 34.2H2.94524C2.50482 34.2 2.091 34.0284 1.77939 33.7173C1.46778 33.4057 1.29608 32.9919 1.29608 32.5509L1.29377 25.1674C1.54167 25.2024 1.78772 25.2199 2.02937 25.2199H2.03561C3.73045 25.2193 5.31809 24.4583 6.50649 23.0756C7.67349 21.7184 8.3159 19.9196 8.31544 18.0102C8.31498 16.1008 7.67129 14.3027 6.50313 12.946C5.31474 11.565 3.72709 10.8045 2.034 10.8045H2.03168C1.78783 10.8045 1.53993 10.8225 1.28983 10.8581L1.2881 3.45997C1.2881 3.01909 1.45911 2.60469 1.77083 2.29297C2.08256 1.98124 2.49684 1.80907 2.93726 1.80907L20.5961 1.80399C21.3353 1.81462 21.9662 2.30973 22.1585 3.02152L22.0617 7.01266C22.0545 7.33225 22.3068 7.59703 22.6258 7.60489C22.9741 7.62802 23.2101 7.35988 23.218 7.04087L23.3151 3.03216C23.3421 2.92936 23.3924 2.83987 23.4368 2.74679C23.4699 2.6773 23.4916 2.60053 23.5335 2.53716C23.5926 2.4479 23.6724 2.37783 23.7468 2.30256C23.7974 2.25134 23.838 2.19029 23.8948 2.14635C23.987 2.0749 24.0956 2.02842 24.2016 1.97777C24.257 1.95129 24.3046 1.91186 24.363 1.89163C24.5336 1.83266 24.7158 1.79994 24.905 1.79994L54.5723 1.80954C55.0127 1.80954 55.4271 1.98112 55.7387 2.29285C56.0503 2.60457 56.2214 3.01886 56.2214 3.45985V32.5401ZM23.2175 19.7344L23.2187 24.3594C23.2187 24.6784 22.9602 24.9375 22.6406 24.9375C22.3216 24.9375 22.0624 24.679 22.0624 24.3594L22.0613 19.7344C22.0613 19.4154 22.3198 19.1563 22.6394 19.1563C22.9584 19.1563 23.2175 19.4148 23.2175 19.7344ZM23.2175 11.6407L23.2187 16.2657C23.2187 16.5847 22.9602 16.8438 22.6406 16.8438C22.3216 16.8438 22.0624 16.5853 22.0624 16.2657L22.0613 11.6407C22.0613 11.3217 22.3198 11.0625 22.6394 11.0625C22.9584 11.0625 23.2175 11.3211 23.2175 11.6407ZM37.4997 12.7822L29.8017 23.8818C29.6899 24.0432 29.5093 24.1301 29.3264 24.1301C29.2129 24.1301 29.0976 24.0968 28.9972 24.0268C28.7352 23.845 28.6697 23.4847 28.8521 23.2222L36.55 12.1227C36.7318 11.8613 37.0921 11.7953 37.3545 11.9776C37.6166 12.1594 37.682 12.5198 37.4997 12.7822ZM29.7073 15.6897C28.751 15.6897 27.973 14.9117 27.973 13.9559C27.9724 13.493 28.1525 13.0572 28.4806 12.7297C28.808 12.4017 29.2433 12.2211 29.7068 12.2211C30.6626 12.2211 31.4411 12.9986 31.4417 13.9543C31.4417 14.9107 30.6637 15.6897 29.7073 15.6897ZM38.3792 22.048C38.3792 23.0043 37.6012 23.7835 36.6448 23.7835C35.6885 23.7835 34.9105 23.0054 34.9105 22.0497C34.9099 21.5867 35.09 21.1509 35.4181 20.8235C35.7455 20.4955 36.1808 20.3149 36.6443 20.3149C37.6001 20.3149 38.3786 21.0922 38.3792 22.048ZM53.2812 10.4809C53.2812 10.8 53.0227 11.0591 52.7031 11.0591L42.2968 11.0624C41.9778 11.0624 41.7187 10.8039 41.7187 10.4843C41.7187 10.1653 41.9772 9.90618 42.2968 9.90618L52.7031 9.90282C53.0221 9.90282 53.2812 10.1614 53.2812 10.4809ZM53.2812 17.9983C53.2812 18.3173 53.0227 18.5764 52.7031 18.5764L42.2968 18.5798C41.9778 18.5798 41.7187 18.3212 41.7187 18.0017C41.7187 17.6827 41.9772 17.4235 42.2968 17.4235L52.7031 17.4202C53.0221 17.4202 53.2812 17.6787 53.2812 17.9983ZM53.2812 25.5122C53.2812 25.8312 53.0227 26.0903 52.7031 26.0903L42.2968 26.0937C41.9778 26.0937 41.7187 25.8351 41.7187 25.5156C41.7187 25.1965 41.9772 24.9374 42.2968 24.9374L52.7031 24.9341C53.0221 24.9341 53.2812 25.1926 53.2812 25.5122Z"
							fill="black"
						/>
					</svg>
				</DiamondBox>
				<DiamondBox text="بالا ترین کیفیت محصول">
					<svg
						className="h-16 w-16 lg:h-28 lg:w-28"
						viewBox="0 0 56 52"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M55.7376 35.6983C55.6834 35.5007 55.5277 35.346 55.3289 35.2918L50.0012 33.8659L49.9689 8.24305C49.9689 8.05446 49.8763 7.87837 49.7215 7.76991C49.6785 7.73962 49.6272 7.73164 49.5787 7.71464L49.586 7.68978L25.3048 0.589714C25.1986 0.558149 25.0857 0.558149 24.9796 0.589714L0.760831 7.67151C0.74765 7.67302 0.736319 7.68007 0.723369 7.6825L0.698394 7.68978L0.698972 7.69186C0.628672 7.70851 0.55814 7.72771 0.497321 7.76991C0.341459 7.87837 0.25 8.05562 0.25 8.24525L0.282722 37.2001C0.282722 38.3935 1.03243 39.481 2.14926 39.9044L24.9378 48.5379C25.0032 48.5628 25.0733 48.5751 25.1422 48.5751C25.2111 48.5751 25.2811 48.5628 25.3466 48.5379L33.6903 45.3768L32.7912 50.7681C32.7573 50.968 32.8319 51.1711 32.9864 51.3022C33.0926 51.3936 33.2258 51.441 33.3613 51.441C33.4234 51.441 33.4843 51.4308 33.5454 51.4105L42.4092 48.4408L51.2742 51.4105C51.4673 51.4737 51.6772 51.4354 51.8331 51.302C51.9878 51.171 52.0623 50.9678 52.0284 50.768L50.4758 41.4592L55.5919 36.2561C55.7365 36.1093 55.7919 35.8971 55.7376 35.6983ZM25.1421 1.74585L47.5588 8.30086L37.2003 12.108L16.434 4.29226L25.1421 1.74585ZM25.1421 16.54L2.69096 8.31092L14.588 4.832L35.5406 12.7181L25.1421 16.54ZM1.43897 37.1989L1.40741 9.07173L24.5312 17.5474V47.1468L2.55915 38.8226C1.88956 38.5686 1.43897 37.9171 1.43897 37.1989ZM25.6875 47.1717V17.5716L48.8137 9.07185L48.8445 33.5564L47.3762 33.1634L42.8934 26.2574C42.6811 25.93 42.1369 25.93 41.9246 26.2574L37.443 33.1634L29.4904 35.2918C29.2916 35.346 29.1359 35.5007 29.0817 35.6983C29.0274 35.8971 29.0828 36.1094 29.2274 36.2561L34.3435 41.4592L33.9103 44.0567L25.6875 47.1717ZM49.4449 40.8586C49.315 40.9907 49.2563 41.177 49.2868 41.3587L50.7298 50.0091L42.5931 47.2834C42.5333 47.263 42.4712 47.2528 42.4091 47.2528C42.347 47.2528 42.2849 47.263 42.225 47.2834L34.0895 50.0091L35.5325 41.3587C35.563 41.177 35.5043 40.9906 35.3744 40.8586L30.7471 36.1523L37.9557 34.2236C38.0945 34.1864 38.2142 34.0995 38.291 33.9798L42.409 27.6339L46.5281 33.9798C46.6049 34.0995 46.7245 34.1864 46.8634 34.2236L54.0719 36.1523L49.4449 40.8586Z"
							fill="black"
						/>
					</svg>
				</DiamondBox>
				<DiamondBox text="سریع ترین زمان ارسال">
					<svg
						className="h-16 w-16 lg:h-28 lg:w-28"
						viewBox="0 0 54 53"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M49.8111 31.0947C52.0061 27.3968 52.6181 20.7889 53.2099 14.398C53.3319 13.0746 53.4549 11.7501 53.5904 10.4504C53.6073 10.2878 53.5554 10.1253 53.4447 10.0033C53.3352 9.88245 53.1794 9.8125 53.0156 9.8125H4.36224C3.98854 7.98262 3.69486 6.69467 3.53506 6.27599C2.58543 3.78393 1.40999 3.03306 1.27899 2.95513C1.00345 2.79476 0.659122 2.88402 0.494241 3.15389C0.330516 3.42376 0.415153 3.77722 0.682825 3.9465C0.691843 3.95216 1.65049 4.57654 2.45559 6.68692C3.03371 8.20566 5.96608 24.4507 7.73098 34.9676C8.43328 39.159 12.0297 42.201 16.2832 42.201H16.2855L50.7031 42.1875C51.0227 42.1875 51.2812 41.929 51.2812 41.6094C51.2812 41.2898 51.0227 41.0312 50.7031 41.0312L16.2855 41.0448H16.2832C12.5976 41.0448 9.48004 38.4082 8.87139 34.7757C8.83439 34.5553 8.79554 34.3252 8.75657 34.0938H44.408C46.6438 34.0938 48.7146 32.9443 49.8111 31.0947ZM48.8174 30.5052C47.9265 32.0059 46.2373 32.9374 44.408 32.9374H39.1587L41.2907 22.5311H51.1381C50.6483 25.7439 49.9566 28.5842 48.8174 30.5052ZM28.1562 21.3749H17.0722L14.9396 10.9686H28.1562V21.3749ZM29.3125 10.9686H42.4784L40.3464 21.3749H29.3125V10.9686ZM28.1562 22.5311V32.9374H19.4417L17.3091 22.5311H28.1562ZM29.3125 22.5311H40.1094L37.9774 32.9374H29.3125V22.5311ZM52.0581 14.2917C51.8367 16.6818 51.6118 19.1016 51.3046 21.3749H41.5277L43.6597 10.9686H52.3754C52.2636 12.0661 52.1609 13.1795 52.0581 14.2917ZM13.7583 10.9686L15.8909 21.3749H6.53819C5.84664 17.5262 5.15347 13.784 4.59511 10.9686H13.7583ZM6.74539 22.5311H16.1279L18.2605 32.9374H8.56105C8.04964 29.9294 7.4048 26.2217 6.74539 22.5311ZM22.3751 43.3436C19.8243 43.3436 17.7501 45.4178 17.7501 47.9686C17.7501 50.5194 19.8243 52.5936 22.3751 52.5936C24.9259 52.5936 27.0001 50.5194 27.0001 47.9686C27.0001 45.4178 24.9259 43.3436 22.3751 43.3436ZM22.3751 51.4374C20.4623 51.4374 18.9064 49.8814 18.9064 47.9686C18.9064 46.0559 20.4623 44.4999 22.3751 44.4999C24.2879 44.4999 25.8439 46.0559 25.8439 47.9686C25.8439 49.8814 24.2879 51.4374 22.3751 51.4374ZM40.8751 43.3436C38.3243 43.3436 36.2501 45.4178 36.2501 47.9686C36.2501 50.5194 38.3243 52.5936 40.8751 52.5936C43.4259 52.5936 45.5001 50.5194 45.5001 47.9686C45.5001 45.4178 43.4259 43.3436 40.8751 43.3436ZM40.8751 51.4374C38.9623 51.4374 37.4064 49.8814 37.4064 47.9686C37.4064 46.0559 38.9623 44.4999 40.8751 44.4999C42.7879 44.4999 44.3439 46.0559 44.3439 47.9686C44.3439 49.8814 42.7879 51.4374 40.8751 51.4374ZM16.5938 5.76562C16.5938 5.44604 16.8523 5.1875 17.1719 5.1875H48.3906C48.7102 5.1875 48.9688 5.44604 48.9688 5.76562C48.9688 6.08521 48.7102 6.34375 48.3906 6.34375H17.1719C16.8523 6.34375 16.5938 6.08521 16.5938 5.76562ZM23.5312 1.14062C23.5312 0.821038 23.7898 0.5625 24.1094 0.5625H43.7656C44.0852 0.5625 44.3438 0.821038 44.3438 1.14062C44.3438 1.46021 44.0852 1.71875 43.7656 1.71875H24.1094C23.7898 1.71875 23.5312 1.46021 23.5312 1.14062ZM0.40625 40.4531C0.40625 40.1335 0.664788 39.875 0.984375 39.875H5.60938C5.92896 39.875 6.1875 40.1335 6.1875 40.4531C6.1875 40.7727 5.92896 41.0312 5.60938 41.0312H0.984375C0.664788 41.0312 0.40625 40.7727 0.40625 40.4531ZM11.9688 45.0781C11.9688 45.3977 11.7102 45.6562 11.3906 45.6562H0.984375C0.664788 45.6562 0.40625 45.3977 0.40625 45.0781C0.40625 44.7585 0.664788 44.5 0.984375 44.5H11.3906C11.7102 44.5 11.9688 44.7585 11.9688 45.0781ZM11.9688 49.7031C11.9688 50.0227 11.7102 50.2812 11.3906 50.2812H5.60938C5.28979 50.2812 5.03125 50.0227 5.03125 49.7031C5.03125 49.3835 5.28979 49.125 5.60938 49.125H11.3906C11.7102 49.125 11.9688 49.3835 11.9688 49.7031Z"
							fill="black"
						/>
					</svg>
				</DiamondBox>
			</div>
		</div>
	);
}

// exports
export default AboutUs;
