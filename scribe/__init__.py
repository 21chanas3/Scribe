import PySimpleGUI as sg

doc_view_column = [[sg.Canvas(background_color='red', size=(696, 900))]]

info_tab = [[sg.Text('Full Name')],
            [sg.In(key='name', expand_x=True)],
            [sg.Column([[sg.Text('University')], [sg.In(key='university', expand_x=True)]]),
             sg.Column([[sg.Text('Major')], [sg.In(key='major', expand_x=True)]])],
            [sg.HSeparator()],
            [sg.Text('Experiences', font=("Helvetica", 12, "bold"))],
            [sg.Text('Experience 1')],
            [sg.In(key='subject_line', expand_x=True)],
            [sg.Button('Save')]
            ]

intro_tab = [[sg.Text('Company Name')],
             [sg.In(key='company_name', expand_x=True)],
             [sg.Text('Company Address')],
             [sg.Multiline(key='company_address', size=(None, 3))],
             [sg.Text('Recipient Name')],
             [sg.In(key='recipient_name', expand_x=True)],
             [sg.Text('Subject Line')],
             [sg.In(key='subject_line', expand_x=True)],
             [sg.Button('Save')]
             ]


def body_paragraph_row(paragraph_num):
    row = [sg.pin(sg.Column(
        [[sg.Text(f'Paragraph {paragraph_num}', font=("Helvetica", 12, "bold"))],
         [sg.HSeparator()],
         [sg.Text('Prompt')],
         [sg.Multiline(key=('-BODY PROMPT-', paragraph_num), size=(None, 5), expand_x=True)],
         [sg.Text('Text')],
         [sg.Multiline(key=('-BODY TEXT-', paragraph_num), size=(None, 7), expand_x=True)],
         [sg.Button('(Re)Generate'), sg.Button('Save')]]
        , key=('-BODY ROW-', paragraph_num)))
    ]
    return row


body_tab = [[sg.Column([body_paragraph_row(1), body_paragraph_row(2), body_paragraph_row(3)],
                       key='-BODY COLUMN-', scrollable=True, expand_y=True, expand_x=True, vertical_scroll_only=True)]]

conclusion_tab = [[sg.Text('Prompt')],
                  [sg.Multiline(key='conclusion_prompt', size=(None, 5), expand_x=True)],
                  [sg.Text('Text')],
                  [sg.Multiline(key='conclusion_text', size=(None, 7), expand_x=True)],
                  [sg.Button('(Re)Generate'), sg.Button('Save')]
                  ]

editor_column = [[sg.TabGroup([[sg.Tab('Personal Information', info_tab)],
                               [sg.Tab('Intro', intro_tab)],
                               [sg.Tab('Body', body_tab, key='-BODY TAB-')],
                               [sg.Tab('Conclusion', conclusion_tab)]], size=(696, 850))]]

layout = [[sg.Column(doc_view_column, ),
           sg.VSeperator(),
           sg.vtop(sg.Column(editor_column, size=(696, 900)))]]
window = sg.Window('Scribe', layout)

while True:
    event, values = window.read()
    if event == sg.WIN_CLOSED:
        break
window.close()
