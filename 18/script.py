from reportlab.lib import colors 
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle 
from reportlab.lib.styles import getSampleStyleSheet 
 
# Создание PDF-документа 
pdf_filename = "/mnt/data/prezentaciya_razvitie_nauki.pdf" 
doc = SimpleDocTemplate(pdf_filename, pagesize=A3) 
 
# Стили 
styles = getSampleStyleSheet() 
title_style = styles["Title"] 
text_style = styles["BodyText"] 
text_style.fontSize = 18 
 
# Контент презентации 
content = [] 
 
# Заголовок 
content.append(Paragraph("Развитие науки", title_style)) 
content.append(Spacer(1, 20)) 
 
# Введение 
content.append(Paragraph("Наука – это систематизированное знание о мире, " 
                         "основанное на наблюдениях, экспериментах и логических выводах.", text_style)) 
content.append(Spacer(1, 20)) 
 
# Таблица с этапами развития науки 
data = [ 
    ["Этап", "Характеристика"], 
    ["Древний мир", "Зарождение математики, астрономии, медицины"], 
    ["Средние века", "Развитие науки в арабском мире и Европе, схоластика"], 
    ["Эпоха Возрождения", "Расцвет естественных наук, развитие методов эксперимента"], 
    ["Новое время", "Формирование классической науки (Ньютон, Галилей, Декарт)"], 
    ["XIX-XX века", "Научно-техническая революция, квантовая механика, генетика"], 
    ["XXI век", "Цифровая революция, искусственный интеллект, нанотехнологии"] 
] 
 
table = Table(data, colWidths=[200, 500]) 
table.setStyle(TableStyle([ 
    ('BACKGROUND', (0, 0), (-1, 0), colors.grey), 
    ('TEXTCOLOR', (0, 0), (-1, 0), colors.whitesmoke), 
    ('ALIGN', (0, 0), (-1, -1), 'CENTER'), 
    ('FONTNAME', (0, 0), (-1, 0), 'Helvetica-Bold'), 
    ('BOTTOMPADDING', (0, 0), (-1, 0), 12), 
    ('BACKGROUND', (0, 1), (-1, -1), colors.beige), 
    ('GRID', (0, 0), (-1, -1), 1, colors.black), 
])) 
 
content.append(table) 
content.append(Spacer(1, 20)) 
 
# Заключение 
content.append(Paragraph("Наука продолжает развиваться, открывая новые горизонты для человечества.", text_style)) 
 
# Сохранение PDF 
doc.build(content) 
 
pdf_filename