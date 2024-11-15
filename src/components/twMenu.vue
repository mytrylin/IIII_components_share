<script setup>
import { ref, watch, defineProps, onMounted, onUnmounted } from 'vue';

// Define props
const props = defineProps({
    args: String,
    initData: Array,
    initDataCht: Array,
    selectNum: [String, Number],
    type: [String, Number],
    filterMatch: [String, Array],
    filterExclude: [String, Array],
});

// Define emits
const emit = defineEmits(['change']);

// Reactive references
const elements = ref([]);
const elementId = ref('');
const input = ref(null);
const inputCht = ref(null);
const data = ref([]);
const dataCht = ref([]);

let observer;

// Watchers
watch(data, (newData) => {
    emit('change', {
        data: newData,
        dataCht: dataCht.value,
    });
});

watch(() => props.initData, (newData) => {
    data.value = newData;
    input.value.value = newData.join(',');
    input.value.setAttribute('value', newData.join(','));
});

watch(() => props.initDataCht, (newData) => {
    if (props.initData.length !== 0 && props.initData.length != newData.length) {
        const codeName = tCodeMenu.getArgs(props.args)?.codeName;
        newData = data.value.map((k) => {
            const selectItem = tcodeParams[codeName]?.arr.find(item => item.k == k);
            return "tCodeCity" == codeName && selectItem.v1 != selectItem.v ? `${selectItem.v1} ${selectItem.v}` : selectItem.v;
        });
    }
    dataCht.value = newData;
    inputCht.value.value = newData.join(',');
    inputCht.value.setAttribute('value', newData.join(','));
});

// Function to handle the change
const handleValueChange = (element) => {
    // 排除 "tCodeValue-" 開頭和 "Cht" 結尾的 ID
    const idPattern = /^tCodeValue-(.+?)Cht$/;
    const match = element.id.match(idPattern);

    if (match) {
        const newValue = match[1]; // 獲取新的值
        const targetId = `tw-args-${newValue}`; // 形成新的 ID

        // 獲取對應的目標元素
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            // 將元素的 value 組成陣列
            const valuesArray = element.value ? element.value.split(",") : []; // 如果值為空字串則返回空陣列
            const length = valuesArray.length; // 計算長度

            // 將長度的值塞入對應的目標元素的 data-count 屬性
            if (length > 0) {
                targetElement.setAttribute('data-count', length);
            } else {
                targetElement.removeAttribute('data-count');
            };
        } else {
            console.error(`Element with ID ${targetId} not found.`);
        };
    };
};

// Observe the document for changes
const startObserving = () => {
    observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            mutation.addedNodes.forEach((node) => {
                if (node.nodeType === 1 && node.id.startsWith('tCodeValue-') && node.id.endsWith('Cht')) {
                    elements.value.push(node);
                    // 監聽 input 的 value 變化
                    const inputObserver = new MutationObserver(() => {
                        handleValueChange(node);
                    });

                    // Observe the 'value' attribute for changes
                    inputObserver.observe(node, {
                        attributes: true,
                        attributeFilter: ['value'],
                    });
                }
            });
        });
    });

    // Start observing the body for added nodes
    observer.observe(document.body, {
        childList: true,
        subtree: true,
    });
};

const loadResource = (type, url, rel = 'stylesheet') => {
    return new Promise((resolve, reject) => {
        let element;

        if (type === 'css') {
            // 檢查是否已加載 CSS
            element = Array.from(document.head.getElementsByTagName('link')).find(
                (link) => link.href === url
            );
            if (!element) {
                // 動態加載 CSS
                const link = document.createElement('link');
                link.rel = rel;
                link.href = url;
                document.head.appendChild(link);
                link.onload = () => resolve(`${url} 加載成功`);
                link.onerror = () => reject(`${url} 加載失敗`);
            } else {
                resolve(`${url} 已存在`);
            }
        } else if (type === 'js') {
            // 檢查是否已加載 JS
            element = Array.from(document.head.getElementsByTagName('script')).find(
                (script) => script.src === url
            );
            if (!element) {
                // 動態加載 JS
                const script = document.createElement('script');
                script.src = url;
                document.head.appendChild(script);
                script.onload = () => resolve(`${url} 加載成功`);
                script.onerror = () => reject(`${url} 加載失敗`);
            } else {
                resolve(`${url} 已存在`);
            }
        }
    });
};

const loadAdditionalResource = () => {
    return new Promise((resolve, reject) => {
        // 似乎除了 duty_NM、college、mrt、tra、shopping 以外，其他大多都有 xx、xxEN、xxVI、xxTH、xxID
        switch (props.args) {
            case 'duty_NM':  // 職務 / duty_NM
                resolve(loadResource('js', 'https://www.1111.com.tw/includesU/tcodeMenu/data/tCodeDutyNM.js?v=1697599819008'));
                break;
            case 'city':  // 地區 / city
                resolve(loadResource('js', 'https://www.1111.com.tw/includesU/tcodeMenu/data/tCodeCity.js?v=1697599819009'));
                break;
            case 'major':  // 科系 / major
                resolve(loadResource('js', 'https://www.1111.com.tw/includesU/tcodeMenu/data/tCodeMajor.js'));
                break;
            case 'trade':  // 產業 / trade
                resolve(loadResource('js', 'https://www.1111.com.tw/includesU/tcodeMenu/data/tCodeTrade.js'));
                break;
            case 'nation':  // 國家 / nation
                resolve(loadResource('js', 'https://www.1111.com.tw/includesU/tcodeMenu/data/tCodeNation.js'));
                break;
            case 'college':  // 大專院校 / college
                resolve(loadResource('js', 'https://www.1111.com.tw/includesU/tcodeMenu/data/tCodeCollege.js'));
                break;
            case 'mrt':  // 捷運站 / mrt
                resolve(loadResource('js', 'https://www.1111.com.tw/includesU/tcodeMenu/data/tCodeMrt.js'));
                break;
            case 'tra':  // 火車站 / tra
                resolve(loadResource('js', 'https://www.1111.com.tw/includesU/tcodeMenu/data/tCodeTra.js'));
                break;
            case 'shopping':  // 商圈 / shopping
                resolve(loadResource('js', 'https://www.1111.com.tw/includesU/tcodeMenu/data/tCodeShopping.js'));
                break;
            case 'workability':  // 工作技能 / workability
                resolve(loadResource('js', 'https://www.1111.com.tw/includesU/tcodeMenu/data/tCodeWorkAbility.js'));
                break;
            case 'certify_Title':  // 專業證照 / certify_Title
                resolve(loadResource('js', 'https://www.1111.com.tw/includesU/tcodeMenu/data/tCodeCertify.js'));
                break;
            case 'CompSkill':  // 電腦技能 / CompSkill
                resolve(loadResource('js', 'https://www.1111.com.tw/includesU/tcodeMenu/data/tCodeCompSkill.js'));
                break;
            default:
                resolve(Promise.resolve()); // 如果不匹配，返回已解析的 Promise
                break;
        }
    });
};

// Function to open the menu
const openBefore = async () => {
    console.log("openBefore 開始執行");  // 確認 openBefore 是否被調用
    try {
        await Promise.all([
            loadAdditionalResource()
        ]);
        console.log("所有資源已成功加載");  // 確認所有資源加載成功
        // 點擊後生成 elementId 和隱藏的 input 元素
        if (!elementId.value) {
            // elementId.value = Date.now().toString(36) + Math.random().toString(36).substring(2);
            elementId.value = `tCodeValue-` + props.args;

            input.value = document.createElement('input');
            input.value.setAttribute('type', 'hidden');
            input.value.setAttribute('id', `${elementId.value}`);
            document.body.appendChild(input.value);

            inputCht.value = document.createElement('input');
            inputCht.value.setAttribute('type', 'hidden');
            inputCht.value.setAttribute('id', `${elementId.value}Cht`);
            document.body.appendChild(inputCht.value);
        };
    } catch (error) {
        console.error('資源加載錯誤: ', error);
    };
};

// 開啟菜單
const open = () => {
    console.log("open 開始執行");
    if (typeof open1111Menu === 'function') {
        open1111Menu(
            elementId.value,
            props.args,
            `${props.selectNum || 100}`,
            {},
            `${props.type || ""}`,
            `open1111Menu["${elementId.value}"]();`,
            Array.isArray(props.filterMatch) ? props.filterMatch.join(",") : props.filterMatch,
            Array.isArray(props.filterExclude) ? props.filterExclude.join(",") : props.filterExclude,
        );
        console.log("菜單已開啟");
    } else {
        console.error('open1111Menu 未定義或不是函數');
    }
};

const openMenu = async () => {
    console.log("CLICK");
    await openBefore();  // 確保 openBefore 完成
    open();
};

// Lifecycle hooks
onMounted(() => {
    // 動態加載 CSS
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = 'https://www.1111.com.tw/includesU/tCodeMenu/tCodeMenu.min.css'
    document.head.appendChild(link);

    // 動態加載 tCode 核心 JS
    const script = document.createElement('script')
    script.src = 'https://www.1111.com.tw/includesU/tcodeMenu/tCodeMenu.min.js?v=1697599819008'
    document.head.appendChild(script);

    startObserving();
});

onUnmounted(() => {
    document.body.removeChild(input.value);
    document.body.removeChild(inputCht.value);

    if (observer) {
        observer.disconnect();
    };
});
</script>

<template>
    <div class="relative h-full tw-searchBtn w-full max-w-full" @click="openMenu">
        <slot></slot>
    </div>
</template>
