import PySimpleGUI as sg

doc_view_column = [[sg.Canvas(background_color='red', size=(696, 900))]]


def experience_row(experience_num):
    row = [[sg.pin(sg.Column(
        [[sg.HSeparator()],
         [sg.Column([[sg.Text('Job Title')], [sg.In(key=('-JOB TITLE-', experience_num), expand_x=True)]]),
          sg.Column([[sg.Text('Company')], [sg.In(key=('-JOB COMPANY-', experience_num), expand_x=True)]])],
         [sg.Column([[sg.Text('Start Date')], [sg.In(key=('-JOB START-', experience_num), expand_x=True)]]),
          sg.Column([[sg.Text('End Date')], [sg.In(key=('-JOB END-', experience_num), expand_x=True)]])],
         [sg.Text('Description')],
         [sg.Multiline(key=('-JOB DESCRIPTION-', experience_num), size=(None, 5), expand_x=True)],
         [sg.Button('Delete', key=('-JOB DELETE-', experience_num))]]
        , key=('-JOB ROW-', experience_num)))
    ]]
    return row


info_tab = [[sg.Text('Full Name')],
            [sg.In(key='name', expand_x=True)],
            [sg.Column([[sg.Text('University')], [sg.In(key='university', expand_x=True)]]),
             sg.Column([[sg.Text('Major')], [sg.In(key='major', expand_x=True)]])],
            [sg.Text('Skills')],
            [sg.Multiline(key=('-SKILLS-'), size=(None, 5), expand_x=True)],
            [sg.HSeparator()],
            [sg.Text('Experiences', font=("Helvetica", 12, "bold"))],
            [sg.Column([[sg.Button('+ Add Experience', key="-ADD JOB-")]],
                       key='-JOB COLUMN-', scrollable=True, expand_x=True, vertical_scroll_only=True,
                       size=(696, 800))]]

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

body_tab = [[sg.Column([[sg.Button('+ Add Paragraph', key="-ADD BODY-")]],
                       key='-BODY COLUMN-', scrollable=True, expand_x=True, vertical_scroll_only=True,
                       size=(696, 800))]]

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


def body_paragraph_row(paragraph_num):
    row = [[sg.pin(sg.Column(
        [[sg.Text(f'Paragraph', font=("Helvetica", 12, "bold"))],
         [sg.HSeparator()],
         [sg.Text('Prompt')],
         [sg.Multiline(key=('-BODY PROMPT-', paragraph_num), size=(None, 5), expand_x=True)],
         [sg.Text('Text')],
         [sg.Multiline(key=('-BODY TEXT-', paragraph_num), size=(None, 7), expand_x=True)],
         [sg.Button('(Re)Generate'), sg.Button('Save'), sg.Button('Delete', key=('-BODY DELETE-', paragraph_num))]]
        , key=('-BODY ROW-', paragraph_num)))
    ]]
    return row


body_paragraph_count = 0
job_count = 0

while True:
    event, values = window.read()
    if event == sg.WIN_CLOSED:
        break
    elif event == '-ADD BODY-':
        body_paragraph_count = body_paragraph_count + 1
        print(body_paragraph_count)
        if ('-BODY ROW-', body_paragraph_count) in window.AllKeysDict:
            window[('-BODY ROW-', body_paragraph_count)].update(visible=True)
        else:
            window.extend_layout(window['-BODY COLUMN-'], body_paragraph_row(body_paragraph_count))
        window['-BODY COLUMN-'].contents_changed()
        window.refresh()
        window['-BODY COLUMN-'].Widget.canvas.config(scrollregion=window['-BODY COLUMN-'].Widget.canvas.bbox('all'))
        window.refresh()
    elif event[0] == '-BODY DELETE-':
        window[('-BODY ROW-', event[1])].update(visible=False)
        window['-BODY COLUMN-'].contents_changed()
        window.refresh()
        window['-BODY COLUMN-'].Widget.canvas.config(scrollregion=window['-BODY COLUMN-'].Widget.canvas.bbox('all'))
    elif event == '-ADD JOB-':
        job_count = job_count + 1
        if ('-JOB ROW-', job_count) in window.AllKeysDict:
            window[('-JOB ROW-', job_count)].update(visible=True)
        else:
            window.extend_layout(window['-JOB COLUMN-'], experience_row(job_count))
        window['-JOB COLUMN-'].contents_changed()
        window.refresh()
        window['-JOB COLUMN-'].Widget.canvas.config(scrollregion=window['-JOB COLUMN-'].Widget.canvas.bbox('all'))
        window.refresh()
    elif event[0] == '-JOB DELETE-':
        window[('-JOB ROW-', event[1])].update(visible=False)
        window['-JOB COLUMN-'].contents_changed()
        window.refresh()
        window['-JOB COLUMN-'].Widget.canvas.config(scrollregion=window['-JOB COLUMN-'].Widget.canvas.bbox('all'))
window.close()
