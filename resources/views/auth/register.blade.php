@extends('layouts.app')

@section('content')
<div class="register bladeform">
    <div class="container">
                        <form method="POST" action="{{ route('register') }}">
                            @csrf

                            <h2 class="poppins">Inventory Management System</h2>
                            <h4 class="poppins">Add New Staff</h4>
    
                            {{-- firstname --}}
                            <div class="">
                                <label for="firstname" class="">{{ __('First Name') }}</label>
    
                                <div class="">
                                    <input id="firstname" type="text" class="form-control @error('firstname') is-invalid @enderror" name="firstname" value="{{ old('firstname') }}" required autocomplete="firstname" autofocus>
    
                                    @error('firstname')
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                        </span>
                                    @enderror
                                </div>
                            </div>
    
                            {{-- middlename --}}
                            <div class="">
                                <label for="middlename" class="">{{ __('Middle Name') }}</label>
    
                                <div class="">
                                    <input id="middlename" type="text" class="form-control @error('middlename') is-invalid @enderror" name="middlename" value="{{ old('middlename') }}" required autocomplete="middlename" autofocus>
    
                                    @error('middlename')
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                        </span>
                                    @enderror
                                </div>
                            </div>
                            
                            {{-- lastname --}}
                            <div class="">
                                <label for="lastname" class="">{{ __('Last Name') }}</label>
    
                                <div class="">
                                    <input id="lastname" type="text" class="form-control @error('lastname') is-invalid @enderror" name="lastname" value="{{ old('lastname') }}" required autocomplete="lastname" autofocus>
    
                                    @error('lastname')
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                        </span>
                                    @enderror
                                </div>
                            </div>
    
                            {{-- phonenumber --}}
                            <div class="">
                                <label for="phonenumber" class="">{{ __('Phone Number') }}</label>
    
                                <div class="">
                                    <input id="phonenumber" type="number" class="form-control @error('phonenumber') is-invalid @enderror" name="phonenumber" value="{{ old('phonenumber') }}" required autocomplete="phonenumber" autofocus>
    
                                    @error('phonenumber')
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                        </span>
                                    @enderror
                                </div>
                            </div>
                            
                            {{-- role --}}
                            <div class="">
                                <label for="role" class="">{{ __('Role') }}</label>
    
                                <div class="">
                                    <select name="role" id="role" class="form-control @error('role') is-invalid @enderror" required autocomplete="role" autofocus>
                                    </select>
                                    {{-- <input id="role" type="text" class="form-control @error('role') is-invalid @enderror" name="role" value="{{ old('role') }}" required autocomplete="role" autofocus> --}}
    
                                    @error('role')
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                        </span>
                                    @enderror
                                </div>
                            </div>
    
                            {{-- email --}}
                            <div class="">
                                <label for="email" class="">{{ __('Email Address') }}</label>
    
                                <div class="">
                                    <input id="email" type="email" class="form-control @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email">
    
                                    @error('email')
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                        </span>
                                    @enderror
                                </div>
                            </div>
    
                            {{-- password --}}
                            <div class="">
                                <label for="password" class="">{{ __('Password') }}</label>
    
                                <div class="">
                                    <input id="password" type="password" class="form-control @error('password') is-invalid @enderror" name="password" required autocomplete="new-password">
    
                                    @error('password')
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                        </span>
                                    @enderror
                                </div>
                            </div>
    
                            {{-- confirm password --}}
                            <div class="">
                                <label for="password-confirm" class="">{{ __('Confirm Password') }}</label>
    
                                <div class="">
                                    <input id="password-confirm" type="password" class="form-control" name="password_confirmation" required autocomplete="new-password">
                                </div>
                            </div>
    
                            <div class="">
                                <div class="">
                                    <button type="submit" class="btn btn-primary">
                                        <i class="fa fa-plus"></i> {{ __('Add') }}
                                    </button>
                                </div>
                            </div>
                        </form>
    </div>
</div>
@endsection
