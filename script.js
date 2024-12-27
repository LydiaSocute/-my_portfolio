// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// 导航栏滚动效果
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
    } else {
        nav.style.backgroundColor = '#fff';
    }
});

// 表单提交处理
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    // 这里添加表单提交逻辑
    alert('消息已发送！');
    this.reset();
});

// 技能进度条动画
function animateSkills() {
    const skills = document.querySelectorAll('.progress');
    skills.forEach(skill => {
        const width = skill.style.width;
        skill.style.width = '0';
        setTimeout(() => {
            skill.style.width = width;
        }, 200);
    });
}

// 页面加载时触发技能��画
window.addEventListener('load', animateSkills); 