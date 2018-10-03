from django import forms


class MyForm(forms.Form):
    group_find = forms.CharField(max_length=20)
