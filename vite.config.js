import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
})

/*
bgcolor:#FF6d5A;
    background: linear-gradient(147deg, #342ead 0%, #ff6d5a 100%);
    <svg width="34" height="18" viewBox="0 0 34 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.164 1.06887C13.1878 2.25431 14.6046 4.16031 15.5689 3.80003C15.9856 3.63732 15.9856 3.463 15.5332 2.19621C14.4498 -0.813889 13.1402 0.115862 13.164 1.06887ZM21.0215 3.75354C20.6882 4.67168 21.843 4.83439 22.6407 3.98598C23.4502 3.11433 24.3193 1.81268 24.7836 0.929407C25.2956 0.0810016 24.2955 -0.349012 23.4621 0.348307C22.474 1.16185 21.2477 3.11433 21.0215 3.75354ZM4.61598 3.0446C3.87784 3.33515 6.35416 6.33363 7.35421 6.35687C8.52093 6.38011 8.61615 6.12443 7.80659 5.06683C6.53272 3.39327 5.46126 2.70757 4.61598 3.0446ZM15.807 7.35636C15.3665 7.78637 14.8426 8.3791 14.6403 8.65803C12.9021 11.1916 12.8783 11.2149 12.0806 10.6221C10.2353 9.274 7.1994 8.35586 7.79467 10.7035C8.16374 12.1214 9.25905 14.7131 9.54478 15.5731C10.2829 17.8394 10.6758 18.2113 11.9854 17.9091C15.2355 17.1421 19.8787 17.1188 23.2003 17.851C24.0217 18.037 24.0693 17.944 24.1527 16.3285C24.3194 13.0628 26.248 9.87833 26.248 8.8556C26.248 7.70502 24.0217 8.56505 20.9978 10.8778L20.6882 11.1103L20.2477 10.8197C19.3429 10.227 18.8905 10.6919 19.4024 11.6797C19.8191 12.4817 20.1644 12.749 21.0811 12.319C21.6049 12.0749 22.3311 11.61 23.355 10.9011C23.7598 10.6221 24.0932 10.4246 24.0932 10.4594C24.0932 10.6221 23.3669 13.6671 23.3669 13.6787L21.5573 13.5276C20.1167 13.4695 19.9501 14.2133 21.4382 14.4342C21.593 14.4574 23.1169 14.6434 23.1169 14.6434C23.1169 14.6434 23.0574 15.2942 22.8907 15.6661C22.7121 16.038 22.4145 16.131 21.9264 15.9683C18.1047 14.7363 11.8782 16.2356 11.8663 16.2356C11.6401 16.2704 9.56861 10.9359 9.73528 10.7732C9.75909 10.75 10.0091 10.9011 10.2948 11.1103C13.5211 13.3998 13.8545 13.3301 15.9856 9.99456L16.9856 8.42559L17.3785 8.99507C18.5214 10.657 20.1405 9.92483 19.2357 8.70452C18.9262 8.29775 18.4143 7.6934 17.5928 6.75202C17.2238 6.32201 16.6761 6.50795 15.807 7.35636ZM31.2959 7.18203C30.8673 7.42609 28.6291 9.51805 28.3672 9.9132C27.8076 10.7848 28.9743 10.9824 30.0339 10.1921C31.2721 9.27399 33.0222 7.69341 33.0222 7.48421C33.0341 7.06582 31.8793 6.85661 31.2959 7.18203ZM1.8063 12.749C3.54448 13.1674 4.54451 13.272 4.93739 13.0628C5.58028 12.7257 5.28265 12.4817 3.75877 12.1098C3.6159 12.0749 2.21106 11.6914 1.24672 11.6914C0.556213 11.6914 -0.979555 12.0633 1.8063 12.749Z" fill="#342EAD"></path>
                  </svg>
*/
